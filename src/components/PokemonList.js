import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "react-emotion"

const fetchPokemons = createResource(async function fetchPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
  return await res.json()
})

export default class PokemonList extends Component {
  render() {
    const { cache } = this.props
    const pokemons = fetchPokemons(cache)
    return (
      <div>
        {pokemons &&
          pokemons.results &&
          pokemons.results.map(pokemon => <p>{pokemon.name}</p>)}
      </div>
    )
  }
}
