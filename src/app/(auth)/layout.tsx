import type { FC, ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<Readonly<AuthLayoutProps>> = ({ children }) => {
  return <main className="flex min-h-dvh items-center justify-center p-4">{children}</main>
}

export default AuthLayout