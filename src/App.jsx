import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react'
import './App.css'
import PagesSetup from './account_pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PagesSetup />
    </>
  )
}

export default App
