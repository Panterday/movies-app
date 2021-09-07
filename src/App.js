import './App.css';
import {Header} from './components/Header'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { LandingPage} from './pages/LandingPage';
import { MovieDescription } from './pages/MovieDescription';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/movie/:movieId">
            <MovieDescription></MovieDescription>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
