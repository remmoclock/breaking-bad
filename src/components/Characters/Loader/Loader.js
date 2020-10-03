import React from "react"
import loader from "../../../img/loader.gif"

const Loader = () => {
  return (
    <img
      src={loader}
      alt="loader"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  )
}

export default Loader
