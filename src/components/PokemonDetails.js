import React from "react"
import { createResource } from "simple-cache-provider"
import { withCache } from "lib"

const createFetcher = createResource(async function fetchDetails(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  return await res.json()
})

export function PokemonDetails({ cache, pokemon }) {
  const data = createFetcher(cache, pokemon.id)
  const stats = parseStats(data)

  return stats.map(stat => (
    <li key={stat.stat}>{`${stat.stat}: ${stat.value}`}</li>
  ))
}

export default withCache(PokemonDetails)

function parseStats(data) {
  return (
    data &&
    data.stats.map(statistic => ({
      stat: statistic.stat.name,
      value: statistic.base_stat
    }))
  )
}
