import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  alert(){
    toast("Oh no! something went horribly wrong!", {type:"error"})
  }

  success(){
    toast("this is a very important peice of information", {type:"success"})
  }

  info(){
    toast("this is a very important peice of information", {type:"info"})
  }

  render() {
    return (
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.success} style={{margin:"10px"}}>
            I'm successful!
          </button>
          <button onClick={this.alert} style={{margin:"10px"}}>
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
