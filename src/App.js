import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify.css';

class App extends Component {

  error(){
    toast("Oh no! something went horribly wrong!", {type:"error", className:"custom-error-toast"})
  }

  success(){
    toast("Whatever you tried doing, it worked!", {type:"success", className:"custom-success-toast"})
  }

  info(){
    toast("this is a very important piece of information", {type:"info", className:"custom-info-toast"})
  }

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
        </header>
        <p className="App-intro">
          <button onClick={this.success} style={{margin:"10px"}}>
            I'm successful!
          </button>
          <button onClick={this.error} style={{margin:"10px"}}>
            I'm a failure!
          </button>
          <button onClick={this.info} style={{margin:"10px"}}>
            I'm just here to provide info!
          </button>
        </p>
      </div>
    );
  }
}

export default App;
