declare module 'react-donut-chart'

export interface DonutProps {
  label: string,
  width?: number,
  height?: number,
  value: number,
  color?: string,
  colors?: [string],
  withGradient?: boolean,
  bgColor?: string,
  rounded?: boolean,
  delay?: number,
  duration?: number
}

export interface AnimationProps {
  v: number
}