import { useState } from "react";

import './App.css'

import NavBar from './NavBar'

function App() {
  const [animal, setAnimal] = useState("kittens");

  return (
    <>
      <header>
        <NavBar setAnimal={setAnimal} />
        <img src={`https://place${animal}.com/408/287`} />
      </header>
    </>
  )
}

export default App
