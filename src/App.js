import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Characters from "./components/Characters/Characters"
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"

const App = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(result.data)
      setLoading(false)
    }
    fetchData()
  }, [query])
  
  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters items={items} loading={loading}  />
    </div>
  )
}

export default App
