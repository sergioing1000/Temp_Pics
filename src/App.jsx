import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormPict from '../src/components/form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormPict>
      </FormPict>
    </>
  );
}

export default App
