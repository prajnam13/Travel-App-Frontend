import './App.css';
import { Route, Switch, Router } from 'react-router';
import Navigation from './components/Navigation';
import AddPlace from './components/AddPlace';
import Home from './components/Home';

function App() {
    return (
      <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddPlace} />
      </Switch>
    </Router>
    );
}

export default App;
