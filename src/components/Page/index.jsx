// Page
import React from 'react';
import { connect } from 'react-redux';
// import { Component } from 'react';
// import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import './style.css'
import Pokemons from './Pokemons'

// import * as ku from '../../lib/ke-utils'

const Page = () => {


  return (
    <div className='page-wrapper'>

      <header>
        <h1 className='green-text site-title'>Pokemon Information App</h1>
        <h2 className='section-sub-title header-text'>Yarn</h2>
      </header>
      <Pokemons />
    </div>
  )
}

export default Page
