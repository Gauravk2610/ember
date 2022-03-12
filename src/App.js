import React from 'react';  
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Home/Footer';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import SuccessMessage from './components/Home/SuccessMessage'
import Events from './pages/Events';
import Initiatives from './pages/Initiatives';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SuccessMessage />
        <Switch>
          <Route path='/initiatives' exact>
            <Initiatives />
          </Route>
          <Route path='/events' exact>
            <Events />
          </Route>
          <Route path='/team' exact>
            <Team />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='*' exact>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;