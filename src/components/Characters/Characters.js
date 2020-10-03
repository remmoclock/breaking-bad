import React, { useState, useEffect } from "react"
import axios from "axios"
import CharacterItem from "./CharacterItem/CharacterItem"


const Characters = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )
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
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
}

export default Characters
