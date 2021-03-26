
import './App.css';
import moviesDb from './moviesDb';
import Movies from './components/Movies'

function App() {
  return (
    <div className="Container">
      {moviesDb.map((movie, index) => 
      (<Movies key={index} movie={movie}/>))}
      
    </div>
  );
}

export default App;
