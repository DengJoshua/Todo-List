import React, { Component } from 'react'
import spinner from '../../img/spinner.gif'

class Spinner extends Component {
  render() {
    return (
      <div className="justify-content-center ml-auto" >
        <img src={spinner} className="spinner" alt="spinner" />
      </div>
    )
  }
}

export default Spinner;
