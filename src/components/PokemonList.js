import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "styled-components"
import PokemonListItem from "components/PokemonListItem"

const createFetcher = createResource(async function fetchPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
  return await res.json()
})

export default function PokemonList({ cache, onChange }) {
  const data = createFetcher(cache)
  const pokemons = parseData(data)
  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonListItem
          key={pokemon.name}
          pokemon={pokemon}
          onChange={onChange}
        />
      ))}
    </div>
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
