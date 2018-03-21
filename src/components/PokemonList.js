import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "react-emotion"

const createFetcher = createResource(async function fetchPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
  return await res.json()
})

export default function PokemonList({ cache, onChange }) {
  const pokemons = createFetcher(cache)
  return (
    <div>
      {pokemons &&
        pokemons.results &&
        pokemons.results.map(pokemon => (
          <div key={pokemon.name} onClick={() => onChange(pokemon.name)}>
            {pokemon.name}
          </div>
        ))}
    </div>
  )
}
