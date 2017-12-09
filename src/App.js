import React, { Component } from 'react';
import LayoutComponent from './components/LayoutComponent';
import cssindex from './css/cssindex.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LayoutComponent title="Chat App Hello there" />
      </div>
    );
  }
}

export default App;
