import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  generatePets = () => this.props.pets.map((pet, index) => <Pet value={index} key={index} data={pet} onAdoptPet={this.props.onAdoptPet}/>)
  

  
  render() {



  return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
