import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

const SpecificPokemon = (props) => {
  const [poke, setPoke] = useState(null)
  const { state } = useLocation()
  const [url, setUrl] = useState(
    state ? state.url : "https://pokeapi.co/api/v2/pokemon/1/"
  )

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res)
      setPoke(res.data)
    })
  }, [url])

  const goPreviousPokemon = () => {
    let index = url.length - 2
    let num = +url[index]
    if (num > 1) {
      num--
      setUrl(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    }
  }

  const goNextPokemon = () => {
    let index = url.length - 2
    let num = +url[index]
    num++
    setUrl(`https://pokeapi.co/api/v2/pokemon/${num}/`)
  }

  return (
    <div>
      {state && state.url}
      <h1>Pokemon Info</h1>
      {poke && (
        <div>
          <h2>{poke.name}</h2>
          <img src={poke.sprites.front_default} />
          <button onClick={goPreviousPokemon}>Go Previous Pokemon</button>
          <button onClick={goNextPokemon}>Go Next Pokemon</button>
        </div>
      )}
    </div>
  )
}

export default SpecificPokemon
