import { CreateStylesOpts } from '../types'

export const createStyles = (id: string, { value, delay, duration }: CreateStylesOpts) => {
  const css = `
    @keyframes ${id} {
      from {
        opacity: 1;
        stroke-dasharray: 0, 100;
      }
      to {
        opacity: 1;
        stroke-dasharray: ${value}, ${100 - value};
      }
    }

    .__donut.__donut-${id} svg circle.segment {
      animation: ${id} ${duration}ms ease-out forwards;
      ${delay ? `animation-delay: ${delay}ms` : ''}
    }
  `
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.id = id
  head.appendChild(style)
  style.appendChild(document.createTextNode(css))
}

export const cleanStyles = (id: string) => {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.getElementById(id)
  if (style) {
    head.removeChild(style)
  }
}