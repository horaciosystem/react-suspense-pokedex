import React, { Component } from "react"
import { createResource } from "simple-cache-provider"
import { withCache } from "lib"

const createFetcher = createResource(async function fetchDetails(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)

  return await res.json()
})

export class PokemonImage extends Component {
  state = {
    viewPerspective: "front_default"
  }

  render() {
    const { cache, pokemon } = this.props
    const data = createFetcher(cache, pokemon.id)

    const { viewPerspective } = this.state
    const image = data.sprites[viewPerspective]

    return <img src={image} alt="pokemon" />
  }
}

export default withCache(PokemonImage)
