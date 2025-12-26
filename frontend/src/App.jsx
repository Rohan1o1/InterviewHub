import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut,UserButton ,SignInButton, SignOutButton} from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to to interview Hub </h1>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  );
}

export default App
