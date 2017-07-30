// Pokemons
import React from 'react';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Pokemon from './Pokemon'
import pokemon from './pokemon-data'

class Pokemons extends Component {
  render() {
    const pokemons = pokemon.map((p) => (
      <Pokemon
        key={p.id}
        id={p.id}
        name={p.name}
        image={p.image}
      />
    ))
    return (
      <Grid>
        <div className='pokemon-wapper'>
          {pokemons}
        </div>
      </Grid>
    )

  }
}


export default Pokemons;
