import React from "react"
import { withCache } from "lib"
import styled from "react-emotion"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"
import Placeholder from "components/Placeholder"

const PokemonsLoader = withCache(props => <PokemonList {...props} />)

export default function Main(props) {
  return (
    <Loader ms="1000" fallback={<Placeholder />}>
      <PokemonsLoader />
    </Loader>
  )
}
