import React from "react"
import styled from "styled-components"
import theme from "theme"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"
import TopBar from "components/common/TopBar"

const Container = styled.div`
  background-color: ${theme.color.purpleDarken};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Main() {
  return (
    <Container>
      <TopBar />
      <Loader>
        <PokemonList />
      </Loader>
    </Container>
  )
}
