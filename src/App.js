
import './App.css';
import React from 'react';
import moviesDb from './moviesDb';
import Movies from './components/Movies'

class App extends React.Component {

  state = {
    movieList: moviesDb
  }

  // Functions
  orderMovies(e){
    const order = e.target.value;

    if(order === 'Decending'){
      this.setState({
        movieList: moviesDb.sort((a,b) => a.year - b.year)
      })
    }
    if(order === 'Ascending'){
      this.setState({
        movieList: moviesDb.sort((a,b) => b.year - a.year)
      })
    }
  }


  bestRate(e){  
    this.setState({
      movieList: moviesDb.sort((a,b) => b.rate - a.rate)
    })
  }
  

  render(){
  return (
    <div>
      <select onChange={e => this.orderMovies(e)} name="orderMovies" id="orderMovies">
        <option value="Decending">Sorty By Year Decending</option>
        <option value="Ascending">Sorty By Year Ascending</option>
      </select>

      <button onChange={e => this.bestRate(e)} name="bestRate" id="bestRate">
        <option value="bestRate">Best Rate</option>
      </button>

      <select onChange={e => this.aToZ(e)} name="aToZ" id="aToZ">
        <option value="aToZ">Sorty By A to Z</option>
        <option value="zToA">Sorty By Z to A</option>
      </select>

      <div className="Container">
        {moviesDb.map((movie, index) => 
        (<Movies key={index} movie={movie}/>))}
        
      </div>
    </div>
  );
}
}

export default App;
