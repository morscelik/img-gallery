import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Picture from './components/Picture'
import data from './helper/data.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gap-3">
        <div className="card" style={{width:"250px"}}>
          <Picture/>
          
        </div>
      </div>
      </div>
    </>
  
  )
}

export default App
