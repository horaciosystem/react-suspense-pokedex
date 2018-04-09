import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px;
`

const LogoContainer = styled.div`
  width: 200px;
  height: 70px;
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
`

export default function TopBar() {
  return (
    <Container>
      <LogoContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
      </LogoContainer>
    </Container>
  )
}
