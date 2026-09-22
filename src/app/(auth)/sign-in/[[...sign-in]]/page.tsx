import type { FC } from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage: FC = () => {
  return (
    <SignIn
      fallbackRedirectUrl="/"
      signUpUrl="/sign-up"
      signUpFallbackRedirectUrl="/"
    />
  )
}

export default SignInPage