import React, { Fragment } from "react"
import { createResource } from "simple-cache-provider"
import styled from "styled-components"
import { withCache } from "lib"
import { flow, capitalize } from "lodash"
import { map, get, filter } from "lodash/fp"

const STATS_TO_SHOW = ["Speed", "Attack", "Defense"]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "IBM Plex Mono", monospace;
  margin-top: 10px;
`

const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`

const StatValue = styled.span`
  font-size: 18px;
  font-weight: 700;
`

const createFetcher = createResource(async function fetchDetails(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  return await res.json()
})

export function PokemonDetails({ cache, pokemon }) {
  const data = createFetcher(cache, pokemon.id)
  const stats = parseStats(data)

  return (
    <Container>
      {stats.map(stat => (
        <p key={stat.stat}>
          <StatLabel>{stat.stat}</StatLabel> <StatValue>{stat.value}</StatValue>
        </p>
      ))}
    </Container>
  )
}

export default withCache(PokemonDetails)

const statFromData = statistic => ({
  stat: capitalize(statistic.stat.name),
  value: statistic.base_stat
})

const filterByStat = item => STATS_TO_SHOW.some(it => it === item.stat)

function parseStats(data) {
  return flow(get("stats"), map(statFromData), filter(filterByStat))(data)
}
