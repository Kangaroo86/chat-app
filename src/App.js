import React, { Component } from 'react';
import Layout from './components/Layout';
import cssindex from './css/cssindex.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Layout title="Chat App Hello there" />
      </div>
    );
  }
}

export default App;
