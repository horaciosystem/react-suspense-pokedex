import React, { Component } from "react"
import styled from "styled-components"
import theme from "theme"
import Loader from "components/Loader"
import PokemonImage from "components/PokemonImage"
import PokemonDetails from "components/PokemonDetails"

const Card = styled.div`
  background-color: ${theme.color.white};
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  min-height: 200px;
  margin: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const CardTitle = styled.p`
  margin: 0;
`

export default class PokemonListItem extends Component {
  state = {
    expanded: false
  }

  handleChangeExpanded = () =>
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))

  render() {
    const { pokemon } = this.props
    const isExpanded = this.state.expanded
    const detailText = isExpanded ? "Hide" : "Show"

    return (
      <Card>
        <CardTitle>{pokemon.name}</CardTitle>
        <div>
          <Loader>
            <PokemonImage pokemon={pokemon} />
          </Loader>
        </div>
        <button onClick={this.handleChangeExpanded}>{detailText}</button>
        {isExpanded && (
          <Loader>
            <PokemonDetails pokemon={pokemon} />
          </Loader>
        )}
      </Card>
    )
  }
}
