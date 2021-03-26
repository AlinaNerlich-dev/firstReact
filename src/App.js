
import './App.css';
import React from 'react';
import moviesDb from './moviesDb';
import Movies from './components/Movies'

class App extends React.Component {

  state = {
    movieList: moviesDb
  }

  //Funktionen zum 
  render(){
  return (
    <div>
      <select onChange={e => this.oderMovies(e)} name="orderMovies" id="orderMovies">
        <option value="Decending">Sorty By Year Decending</option>
        <option value="Ascending">Sorty By Year Ascending</option>
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
