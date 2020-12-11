import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({filters: {type: e.target.value}})
    console.log(this.state.filters.type);
  }

  onFindPetsClick = (e) => {

  let urlTail = (this.state.filters.type !== "all") ? "/api/pets?type="+this.state.filters.type : "/api/pets"  
  fetch(urlTail)
  .then(resp => resp.json())
  .then(data => this.setState({pets: data}))
  }

  onAdoptPet = (e) => {
    // this.state.pets.find(pet => pet.id==id).isAdopted
    // pet.isAdopted = !pet.isAdopted 

    // this.setState({pets: {[e.target.value]: {isAdopted: true} }})
   let someProperty = this.state.pets[e.target.value] 
   someProperty.isAdopted = true;
   this.setState({someProperty})

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
                        onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser  pets={this.state.pets}
                          onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
