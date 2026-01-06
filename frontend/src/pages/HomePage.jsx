import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast'

const HomePage = () => {
  return (
    <div>
      <button onClick={()=>toast.success("this is a success toast")  } className='btn btn-secondary'>
      click me
      </button>
      <SignedOut>
        <SignInButton>
          <button>
            login
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>
    </div>
  )
}

export default HomePage