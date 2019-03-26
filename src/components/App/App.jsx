import React from 'react';
import Layout from './../Layout/Layout';


export default class App extends React.Component {
    render() {
        return (
            <Layout>
				{this.props.children}
            </Layout>
        );
    }
}


/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        <header className="App-header">
			<h1>Hello World</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;*/