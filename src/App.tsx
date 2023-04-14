import React from 'react';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
