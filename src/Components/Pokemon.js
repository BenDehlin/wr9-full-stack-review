import { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [newPokemon, setNewPokemon] = useState("")
  const { push } = useHistory()

  useEffect(() => {
    console.log("component mounted")
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        console.log(res.data.results)
        setPokemon(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h1>Pokemon</h1>
      <input
        value={newPokemon}
        onChange={(e) => setNewPokemon(e.target.value)}
      />
      {pokemon.map((poke) => (
        <div
          style={{ backgroundColor: "rebeccapurple", color: "white" }}
          key={poke.name}
          onClick={() =>
            push({
              pathname: "/specific/pokemon",
              state: { url: poke.url, name: poke.name },
            })
          }
        >
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Pokemon

// this.state ={
//     newPokemon: ''
// }

// handleNewPokemon = (e) => {
//     this.setState({newPokemon: e.target.value})
// }

// <input value={this.state.newPokemon} onChange={(e) => this.handleNewPokemon(e)} />
