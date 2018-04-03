import React from "react"
import { createResource } from "simple-cache-provider"
import styled from "styled-components"
import PokemonListItem from "components/PokemonListItem"

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
`

const createFetcher = createResource(async function fetchPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/")

  return await res.json()
})

export default function PokemonList({ cache }) {
  const data = createFetcher(cache)
  const pokemons = parseData(data)

  return (
    <ListContainer>
      {pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ListContainer>
  )
}

function parseData(pokemons) {
  return (
    pokemons &&
    pokemons.results &&
    pokemons.results.map(pokemon => ({
      name: pokemon.name,
      id: extractId(pokemon.url)
    }))
  )
}

function extractId(url) {
  const list = url.split("/")
  const id = list.pop()

  return id ? id : list.pop()
}
