import React, { Component } from 'react'

class Candidato extends Component {
  render() {
    return (
      <tr>
            <td>{this.props.nombre}</td>
            <td>{this.props.mail}</td>
            <td>{this.props.url_cv}</td>
      </tr>
    )
  }
}

export default Candidato