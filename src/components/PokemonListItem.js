import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "styled-components"

const Card = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`

export default function PokemonListItem({ pokemon, onChange }) {
  return (
    <Card onClick={() => onChange(pokemon)}>
      <p>{pokemon.name}</p>
    </Card>
  )
}
