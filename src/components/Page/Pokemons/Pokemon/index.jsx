// Member
import React, { Component } from 'react';
import { Grid, Image } from 'react-bootstrap'
import fetch from 'isomorphic-fetch';


class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    }
  }

  componentDidMount() {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`
    // 'https://pokeapi.co/api/v2/pokemon/150/'
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          pokemon: json,
        })
      })
  }

  render () {
    const { pokemon } = this.state
    if (pokemon === null) {
      return null;
    }
    // console.log(pokemon.species.name) // works
    return (
      <Grid>
        <p>{pokemon.species.name}</p>
        <Image src={this.props.image} responsive alt='member picture' />
      </Grid>
    )
  }

}

export default Pokemon;
