import React, { Component } from 'react'
import Candidato from './Candidato'

class CandidatosList extends Component {
  render() {

    const candidatosList = this.props.candidatos.map((candidato, i) => {
      return <Candidato mail={candidato.mail} nombre={candidato.nombre} url_cv={candidato.url_cv} key={i}/>
    })

    return (
      <div >
      <table className='table col-lg-6'>
          <thead className='thead-dark'>
            <tr>
            <th>Nombre Candidato</th>
            <th>Mail</th>
            <th>CV</th>
            </tr>
          </thead>
          <tbody>
          {candidatosList}
        </tbody>
      </table>
    </div>
    )
  }
}

export default CandidatosList