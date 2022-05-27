import NextNProgress from 'nextjs-progressbar'
import { FC } from 'react'

export const LayoutDefaultTopProgressBar: FC = () => {
  return (
    <NextNProgress
      height={1}
      color="#000"
      stopDelayMs={0}
      startPosition={-1}
      options={{ trickleSpeed: 50, showSpinner: false }}
    />
  )
}
