
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import Guide from './Components/Guide/Guide';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Cities></Cities>
              <Guide></Guide>
             
            </Route>
            <Route path="/home">
              <Cities></Cities>
              <Guide></Guide>
              
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dhaka">
              <DhakaCities></DhakaCities>
            </Route>
            <Route path="/dhakahotel">
              <DhakaHotels></DhakaHotels>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
