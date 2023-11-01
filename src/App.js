import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  // Reat cannot output objects and boolean
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
