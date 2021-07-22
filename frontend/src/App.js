import './App.css';
import './reset.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/game' component={Game} />
        <Route path='/scoreboard' component={Scoreboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
