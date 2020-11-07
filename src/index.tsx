import React, { useLayoutEffect } from 'react'
import { DonutProps } from '../types'
import { createStyles, cleanStyles } from './styles'

import './styles.css'

const Donut:React.FC<DonutProps> = ({
  label,
  value,
  color = 'rgba(151, 239, 233, 1)',
  bgColor = '#ccc',
  withGradient = false,
  rounded = true,
  delay = 0,
  duration = 850,
  showLabel = true
}) => {
  const r = 100 / (2 * Math.PI)
  const id = label.replace(/\s/g, '').toLowerCase()
  const gradientId = `gradient-${id}`
  const donutId = `donut-${id}`

  useLayoutEffect(() => {
    createStyles(donutId, { value, delay, duration })
    return () => cleanStyles(donutId)
  }, [value])
  
  if (withGradient && (!Array.isArray(color) || !color.length)) {
    throw new Error(`🍩 withGradient option color to be an array`)
  }

  return (
    <div className={`__donut __donut-${donutId}`}>
      {showLabel && (
        <span>
          {label}
        </span>
      )}
      <svg viewBox='0 0 40 40'>
        {withGradient && (
          <defs>
            <linearGradient
              gradientTransform="rotate(90)"
              id={gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {Array.isArray(color) && color.map((c: string, i: number) => (
                <stop
                  key={`stop-${donutId}-${c}`}
                  offset={`${i * (100 / (color.length - i))}%`}
                  stopColor={c}
                />
              ))}
            </linearGradient>
          </defs>
        )}
        <g>
          <circle
            r={r}
            cx='20'
            cy='20'
            fill='none'
            stroke='none'
            className='hole'
          />
          <circle
            r={r}
            cx='20'
            cy='20'
            className='ring'
            strokeOpacity={.25}
            strokeWidth={3}
            stroke={bgColor}
            fill='transparent'
          />
          <circle
            r={r}
            cx='20'
            cy='20'
            strokeWidth={5}
            className='segment'
            fill='transparent'
            stroke={!withGradient && typeof color === 'string' ? color : `url(#${gradientId})`}
            strokeLinecap={rounded ? 'round' : 'square'}
          />
          <text
            x='50%'
            y='50%'
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {value}%
          </text>
        </g>
      </svg>
    </div>
  )
}

export default Donut