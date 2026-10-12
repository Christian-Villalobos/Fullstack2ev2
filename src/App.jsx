import { useState } from 'react'
import { Formulario } from './components/organisms/Formulario'
import { Text } from './components/atoms/Text'
import './App.css'






function App() {

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Text variant="h3" className="text-2xl font-bold text-blue-500">
        Mi título
      </Text>
    </>
  )
}

export default App
