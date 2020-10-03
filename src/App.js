import React from "react"
import "./App.css"
import Characters from "./components/Characters/Characters"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  )
}

export default App
