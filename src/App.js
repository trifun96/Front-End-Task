import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";



import Navbar from './navbar/navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Skill from './components/Skill';
import Static from './components/Static';

function App () {
  
  return (

   <div className="container">
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/skills" exact component={Skills} />
    <Route path="/static" exact component={Static} />
    <Route path="/skills/new-skill" exact={true} component={Skill} />
    </Switch>
     </BrowserRouter>
   </div>

  );
}


export default App;
