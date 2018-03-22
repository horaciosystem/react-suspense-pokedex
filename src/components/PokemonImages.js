import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "styled-components"

const createFetcher = createResource(async function fetchDetails(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
  return await res.json()
})

export default class PokemonImage extends Component {
  state = {
    viewPerspective: "front_default"
  }

  render() {
    const { cache, pokemon } = this.props
    const data = createFetcher(cache, pokemon.id)

    const { viewPerspective } = this.state
    const image = data.sprites[viewPerspective]

    return <img src={image} />
  }
}
