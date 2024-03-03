import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Text from './components/Text'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-max bg-black text-white w-h'>
        <Navbar/>
        <Text/>
        <Data/>
      </div>
    </>
  )
}

export default App
