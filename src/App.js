import React from 'react';
import './App.css';
import Main from './Main.js'
import Navbar from './components/Navbar/Navbar.js'


function App(){
    return(

      <div className = "App">
        
      	<div className = "jumbotron text-center">
        	<h1>Task & Rewards</h1>
        	<h4>Because every contribution deserves reward</h4>
        </div>
        <Navbar />
       
        <Main />
        <br/>
        
      </div>

    );
}

export default App;