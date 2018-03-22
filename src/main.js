import React, { Component } from "react"
import { withCache } from "lib"
import styled from "react-emotion"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"
import Placeholder from "components/Placeholder"
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
        <Loader ms="1000" fallback={<Placeholder />}>
          <PokemonsLoader onChange={this.handleChangeSelected} />
        </Loader>
        {selected && (
          <React.Fragment>
            <Loader ms="1000" fallback={<Placeholder />}>
              <PokemonDetailsLoader pokemon={selected} />
            </Loader>
            <Loader ms="1000" fallback={<Placeholder />}>
              <PokemonImagesLoader pokemon={selected} />
            </Loader>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
