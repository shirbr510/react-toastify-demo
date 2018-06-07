import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import GithubRibbon from './components/GithubRibbon'
import {ToastContainer, success, error, info} from './components/Toasts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop
          closeOnClick = {false}
          rtl={false}
          pauseOnVisibilityChange
          pauseOnHover
          className="custom-toast-container"
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pick a button to start toasting</h1>
          <GithubRibbon repositoryUrl={"https://github.com/shirbr510/react-toastify-demo"}/>
        </header>
        <p className="App-intro">
          <button onClick={()=>success("Whatever you tried doing, it worked!")} style={{margin:"10px"}}>
            I'm successful!
          </button>
          <button onClick={()=>error("Oh no! something went horribly wrong!")} style={{margin:"10px"}}>
            I'm a failure!
          </button>
          <button onClick={()=>info("this is a very important piece of information!")} style={{margin:"10px"}}>
            I'm just here to provide info!
          </button>
        </p>
      </div>
    );
  }
}

export default App;
