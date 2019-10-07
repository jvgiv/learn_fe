import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { useAuth0 } from './react-auth0-wrapper'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import LessonSearch from './components/LessonSearch'

function App() {
  // const { loading } = useAuth0()

  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <div>
     <header>
       <NavBar />
     </header>
     <Switch>
       <Route path='/' exact />
       <Route path='/profile' component={Profile} />
       <Route path='/search' component={LessonSearch} />
     </Switch>
    </div>
  );
}

export default App;
