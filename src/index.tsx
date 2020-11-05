import React from 'react'
import styled, { css, keyframes } from 'styled-components'

interface DoughnutProps {
  label: string,
  width?: number,
  height?: number,
  value: number,
  color?: [number, number, number]
}

interface ChartProps {
  // r: number,
  // dash: number,
  v: number
}

const generateAnimation = (v: number) => keyframes`
  from {
    stroke-dasharray: 0, 100;
  }
  to {
    stroke-dasharray: ${v}, ${100-v};
  }
`

const Chart = styled.svg`
  width: 100%;
  height: 100%;

  circle {
    stroke-linecap: round;
  }

  circle.segment {
    stroke-dashoffset: 25;
    animation: ${css`${({ v }: ChartProps) => generateAnimation(v)}`} 1s ease-out forwards;
  }
`

const Doughnut:React.FC<DoughnutProps> = ({
  label,
  width = 60,
  height = 60,
  value,
  color = [151, 239, 233]
}) => {
  const r = 100 / (2 * Math.PI)
  const gradientId = `gradient-${label.toLowerCase()}`

  console.log(label, color.join(','));
  

  return (
    <div className='doughnut' style={{ width, height }}>
      <span>{label}</span>
      <Chart v={value} viewBox='0 0 40 40'>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(${color.join(',')}, 1)`} />
            <stop offset="100%" stopColor={`rgba(${color.join(',')}, .65)`} />
          </linearGradient>
        </defs>

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
            stroke={`rgba(${color.join(',')}, 1)`}
            fill='transparent'
          />
          <circle
            r={r}
            cx='20'
            cy='20'
            strokeWidth={5}
            className='segment'
            fill='transparent'
            stroke={`url(#${gradientId})`}
            // stroke={`rgba(${color.join(',')}, 1)`}
          />
          <text
            style={{ fontSize: '10px' }}
            x='50%'
            y='50%'
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {value}%
          </text>
        </g>
      </Chart>
    </div>
  )
}

export default Doughnut