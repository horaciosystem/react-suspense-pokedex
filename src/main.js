import React, { Component } from "react"
import { withCache } from "lib"
import styled from "react-emotion"
import PokemonList from "components/PokemonList"
import Loader from "components/Loader"
import Placeholder from "components/Placeholder"
import PokemonDetails from "components/PokemonDetails"

const PokemonsLoader = withCache(PokemonList)
const PokemonDetailsLoader = withCache(PokemonDetails)

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
          <Loader ms="1000" fallback={<Placeholder />}>
            <PokemonDetailsLoader name={selected} />
          </Loader>
        )}
      </React.Fragment>
    )
  }
}
