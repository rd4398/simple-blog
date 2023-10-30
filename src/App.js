import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  // Reat cannot output objects and boolean
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
