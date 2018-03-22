import React, { Component } from "react"
import { withCache } from "lib"
import styled from "styled-components"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"
import PokemonDetails from "components/PokemonDetails"
import PokemonImages from "components/PokemonImages"

const PokemonsLoader = withCache(PokemonList)
const PokemonDetailsLoader = withCache(PokemonDetails)
const PokemonImagesLoader = withCache(PokemonImages)

export default class Main extends Component {
  state = {
    selected: null
  }

  handleChangeSelected = selected => this.setState({ selected })

  render() {
    const { selected } = this.state
    return (
      <React.Fragment>
        <Loader ms="1000">
          <PokemonsLoader onChange={this.handleChangeSelected} />
        </Loader>
        {selected && (
          <React.Fragment>
            <Loader ms="1000">
              <PokemonDetailsLoader pokemon={selected} />
            </Loader>
            <Loader ms="1000">
              <PokemonImagesLoader pokemon={selected} />
            </Loader>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
