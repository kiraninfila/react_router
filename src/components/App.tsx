import React from 'react';
import './App.css';
import Navbar from './navbar';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './home';
import Content from './content';
import Dashboard from './dashboard';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component= {Content} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
