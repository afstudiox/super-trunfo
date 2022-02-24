import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/Form.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.activateButton());
  }

  activateButton = () => {
    let validate = false;
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const max = 90;
    const maxSum = 210;
    const min = 0;
    if (!cardName || !cardDescription || !cardImage || !cardRare) {
      validate = true;
    }

    if (cardAttr1 > max || cardAttr2 > max || cardAttr3 > max) {
      validate = true;
    }

    if ((+cardAttr1 + +cardAttr2 + +cardAttr3) > maxSum) {
      validate = true;
    }

    if (cardAttr1 < min || cardAttr2 < min || cardAttr3 < min) {
      validate = true;
    }

    this.setState({
      isSaveButtonDisabled: validate,
    });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          { ...this.state }
        />
        <Card
          { ... this.state }
        />
      </div>
    );
  }
}

export default App;
