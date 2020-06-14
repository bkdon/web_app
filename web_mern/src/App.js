import React from 'react';
import {BrowserRouter as Router , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" 

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/eventexercises-list.component";
import EditExercise from "./components/edit-eventexercise.component";
import CreateExersice from "./components/create-eventexercise.component";
import CreateUser from "./components/create-event.component";
import Home from "./components/home";
import Signup from "./components/Signup";
import LoginTab from "./components/LoginTab";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
        <br/>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExersice} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={LoginTab} />
        </div>
    </Router>

  );
}

export default App;
