import React from "react"
import CharacterItem from "./CharacterItem/CharacterItem"


const Characters = ({items, loading}) => {


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
