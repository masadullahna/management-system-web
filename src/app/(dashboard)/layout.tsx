import type { FC, ReactNode } from 'react'
import { auth } from '@clerk/nextjs/server'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout: FC<Readonly<DashboardLayoutProps>> = async ({ children }) => {
  await auth.protect()

  return (
    <div className="flex flex-1 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout