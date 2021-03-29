
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


  bestRate(){  
    this.setState({
      movieList: moviesDb.sort((a,b) => b.rate - a.rate)
    })
  }

  AtoZ(e){
    const choice = e.target.value;

    if(choice === 'aToZ'){
      this.setState({
        movieList: moviesDb.sort((a,b) =>a.title.localeCompare(b.title))
      })
    }
    if(choice === 'zToA'){
      this.setState({
        movieList: moviesDb.sort((a,b)=>b.title.localeCompare(a.title))
      })
    }
  }
  

  render(){
  return (
    <div>
      <select onChange={e => this.orderMovies(e)} name="orderMovies" id="orderMovies">
        <option value="Decending">Sorty By Year Decending</option>
        <option value="Ascending">Sorty By Year Ascending</option>
      </select>

      <button onClick={e => this.bestRate(e)} name="bestRate" id="bestRate">Best Rate</button>

      <select onChange={e => this.AtoZ(e)} name="aToZ" id="aToZ">
        <option value="aToZ">Sorty By A to Z</option>
        <option value="zToA">Sorty By Z to A</option>
      </select>

      <input type="text" value=""/>

      <div className="Container">
        {moviesDb.map((movie, index) => 
        (<Movies key={index} movie={movie}/>))}
        
      </div>
    </div>
  );
}
}

export default App;
