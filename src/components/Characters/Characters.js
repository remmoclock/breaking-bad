import React, { useState, useEffect } from "react"
import axios from "axios"

const Characters = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )
      console.log(result.data)
      setItems(result.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return loading ? (
    <h1>chargement...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
    </section>
  )
}

export default Characters
