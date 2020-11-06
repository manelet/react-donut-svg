declare module 'react-donut-chart'

export interface DonutProps {
  label: string,
  width?: number,
  height?: number,
  value: number,
  color?: string | string[],
  withGradient?: boolean,
  bgColor?: string,
  rounded?: boolean,
  delay?: number,
  duration?: number
}

export interface CreateStylesOpts {
  value: number,
  delay: number,
  duration: number
}