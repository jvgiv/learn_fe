import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { useAuth0 } from './react-auth0-wrapper'

function App() {
  const { loading } = useAuth0()

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
     <header>
       <NavBar />
     </header>

     
    </div>
  );
}

export default App;
