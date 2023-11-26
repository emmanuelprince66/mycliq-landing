import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoutesContainer from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<RoutesContainer/>
    </>
  )
}

export default App
