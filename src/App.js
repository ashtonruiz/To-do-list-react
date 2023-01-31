import './App.css';
import backgroundImage from './background.webp';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Hello</h1>
    </div>
  );
}

export default App;