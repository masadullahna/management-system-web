import type { FC } from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage: FC = () => {
  return (
    <SignUp
      fallbackRedirectUrl="/"
      signInUrl="/sign-in"
      signInFallbackRedirectUrl="/"
    />
  )
}

export default SignUpPage