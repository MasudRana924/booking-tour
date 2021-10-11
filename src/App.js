
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';

import Cities from './Components/Cities/Cities';
import DhakaCities from './Components/DhakaCities/DhakaCities';
import DhakaHotels from './Components/DhakaHotels/DhakaHotels';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Cities></Cities>
         

        </Route>
        <Route path="/home">
          <Cities></Cities>
        
        </Route>
        <Route  path="/login">
          <Login></Login>
        </Route>
        <Route  path="/dhaka">
          <DhakaCities></DhakaCities>
        </Route>
        <Route  path="/dhakahotel">
         <DhakaHotels></DhakaHotels>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
