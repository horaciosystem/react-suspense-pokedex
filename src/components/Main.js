import React from "react"
import { withCache } from "lib"
import styled from "styled-components"
import theme from "theme"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"

const PokemonsLoader = withCache(PokemonList)

const Container = styled.div`
  background-color: ${theme.color.purpleDarken};
  display: flex;
  justify-content: center;
`

export default function Main() {
  return (
    <Container>
      <Loader>
        <PokemonsLoader />
      </Loader>
    </Container>
  )
}
