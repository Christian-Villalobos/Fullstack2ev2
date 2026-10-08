import { useState } from 'react'
import { ImageCards } from './components/molecules/ImageCards'
import { ImageCard } from './components/molecules/ImageCard'
import { TextButton } from './components/molecules/TextButton'
import { Input } from './components/atoms/Input'
import { Formulario } from './components/organisms/Formulario'

import './App.css'


const misCampos = [
    {
        name: "nombre",
        label: "Nombre",
        type: "text",
        className: "col-span-2 bg-gray-50" // <-- Clase personalizada para este campo específico
    },
    {
        name: "email",
        label: "Correo electrónico",
        type: "email",
        className: "border-red-500" // <-- Clase específica para este campo
    }
];




function App() {

const [inputValue, setInputValue] = useState('');

  return (
    <>
      <header>
      </header> 
      <main>
        <Formulario 
          fields={misCampos} 
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado");
          }} 
        />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
