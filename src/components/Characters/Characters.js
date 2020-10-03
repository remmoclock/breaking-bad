import React from "react"
import CharacterItem from "./CharacterItem/CharacterItem"
import Loader from "./Loader/Loader"


const Characters = ({items, loading}) => {


  return loading ? (
    <Loader />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
}

export default Characters
