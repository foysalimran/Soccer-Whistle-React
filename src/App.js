import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    
    <Router>
      <Header />
      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/league/:idLeague">
        <TeamDetail />
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
      
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
