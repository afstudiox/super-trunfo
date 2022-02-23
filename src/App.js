import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/Form.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
