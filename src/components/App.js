import Weather from './weather/weather';
import Search from './search/search'
import './App.css';

function App() {
  return (
      <div className="container">
        <Search />
        <Weather />
      </div>

    );
}

export default App;
