import React, { Component } from 'react';
import './App.css';
import BagelsContainer from './components/BagelsContainer'
import Favorites from './components/Favorites'

class App extends Component {

  state = {
    bagels: [],
    favorites: []
  }

  addToFavorites = (bagel) => {
    if (!this.state.favorites.find(bagl => bagl.id == bagel.id)) {
      this.setState({favorites: [...this.state.favorites, bagel]})
    }
  }

  removeFavorite = (bagel) => {
    let newFavorites = this.state.favorites.filter(fav => fav.id !== bagel.id)
    this.setState({favorites: newFavorites})
  }
  
  componentDidMount() {
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(allBagels => this.setState({bagels: allBagels}))
  } 

  render() {
    return (
      <div className="App">
          <Favorites favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>
          <h1>All Bagels!</h1>
          <BagelsContainer bagels={this.state.bagels} addToFavorites={this.addToFavorites}/>
      </div>
    );
  }
}

export default App;
