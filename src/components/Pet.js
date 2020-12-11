import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.data.gender == "female") ? '♀' : '♂' }
            {this.props.data.name}
          </a>
          <div className="meta">
    <span className="date">{this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.props.data.isAdopted ? 
          <button className="ui disabled button">Already adopted</button> :
          <button value={this.props.value}  onClick={this.props.onAdoptPet} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
