import clsx from 'clsx'
import { ReactNode } from 'react'

import Header from '../Header'

export interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={clsx('flex flex-col')}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
