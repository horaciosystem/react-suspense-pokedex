import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "styled-components"

const createFetcher = createResource(async function fetchDetails(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  return await res.json()
})

export default function PokemonDetails({ cache, pokemon }) {
  const data = createFetcher(cache, pokemon.id)
  const stats = parseStats(data)
  return stats.map(stat => (
    <li key={stat.stat}>{`${stat.stat}: ${stat.value}`}</li>
  ))
}

function parseStats(data) {
  return (
    data &&
    data.stats.map(statistic => ({
      stat: statistic.stat.name,
      value: statistic.base_stat
    }))
  )
}
