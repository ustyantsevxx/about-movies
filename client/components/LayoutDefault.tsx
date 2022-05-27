import { FC } from 'react'

import { LayoutDefaultHeader } from './LayoutDefaultHeader'
import { LayoutDefaultTopProgressBar } from './LayoutDefaultTopProgressBar'

export const LayoutDefault: FC = props => {
  return (
    <div className="flex h-full flex-col">
      <LayoutDefaultHeader />
      <LayoutDefaultTopProgressBar />
      <main className="mt-[65px] grow pt-8">{props.children}</main>
    </div>
  )
}
