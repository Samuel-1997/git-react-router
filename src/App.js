import React from 'react';
import './components/App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Users from './components/Users';
import Form from './components/Formuser';
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from './components/Posts';
import Albums from './components/Albums';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      
      <Switch>

       <Route exact path='/home' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/' component={Users} />
       <Route exact path='/posts' component={Posts} />
       <Route exact path='/albums' component={Albums} />
    
      </Switch>
      </Router>
    </div>
  );
}

export default App;
