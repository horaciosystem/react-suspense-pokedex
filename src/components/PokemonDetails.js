import React, { Component, Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "react-emotion"

const createFetcher = createResource(async function fetchDetails(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  return await res.json()
})

export default function PokemonDetails({ cache, name }) {
  const data = createFetcher(cache, name)
  const stats = parseStats(data)
  return stats.map(stat => (
    <li key={stat.name}>{`${stat.name}: ${stat.value}`}</li>
  ))
}

function parseStats(data) {
  return (
    data &&
    data.stats.map(statistic => ({
      name: statistic.stat.name,
      value: statistic.base_stat
    }))
  )
}
