import React from "react"
import styled from "styled-components"
import pokeballImg from "assets/images/pokeball.svg"

const Container = styled.span`
  width: 50px;
  height: 50px;
  animation-name: spin;
  animation-duration: 700ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const Pokeball = styled.img`
  width: 100%;
`

export default function Placeholder() {
  return (
    <Container>
      <Pokeball src={pokeballImg} />
    </Container>
  )
}
