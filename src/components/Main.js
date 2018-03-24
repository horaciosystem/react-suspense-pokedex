import React, { Component } from "react"
import { withCache } from "lib"
import styled from "styled-components"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"
import PokemonDetails from "components/PokemonDetails"
import PokemonImages from "components/PokemonImages"
import theme from "theme"

const PokemonsLoader = withCache(PokemonList)
const PokemonDetailsLoader = withCache(PokemonDetails)
const PokemonImagesLoader = withCache(PokemonImages)

const Container = styled.div`
  background-color: ${theme.color.lolou};
`

export default class Main extends Component {
  state = {
    selected: null
  }

  handleChangeSelected = selected => this.setState({ selected })

  render() {
    const { selected } = this.state
    return (
      <Container>
        <Loader>
          <PokemonsLoader onChange={this.handleChangeSelected} />
        </Loader>
        {selected && (
          <React.Fragment>
            <Loader>
              <PokemonDetailsLoader pokemon={selected} />
            </Loader>
            <Loader>
              <PokemonImagesLoader pokemon={selected} />
            </Loader>
          </React.Fragment>
        )}
      </Container>
    )
  }
}
