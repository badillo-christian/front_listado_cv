import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import CandidatosList from './CandidatosList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  updateSearchInput = (text) => {
    this.setState({
      searchInput: text
    })
  }

  render() {

    const filteredCandidatos = this.props.candidatos.filter(candidato => {
      return this.state.searchInput === '' ? true : candidato.nombre.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })

    return (
      <div className='App'>
        <div className='Container'>
          <div className='jumbotron'>
            <h1>Listado de CVs</h1>
          </div>
          <Input updateSearchInput={this.updateSearchInput}/>
          <CandidatosList candidatos={filteredCandidatos} />
        </div>
      </div>
    );
  }
}

export default App;
