import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.props;

    const isTrunfo = cardTrunfo
      ? (<p data-testid="trunfo-card" id="trunfo">Super Trunfo</p>)
      : '';

    return (

      <div className="card">

        <p data-testid="name-card">
          { cardName }
        </p>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <p data-testid="description-card">
          { cardDescription }
        </p>

        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>

        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>

        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>

        <p data-testid="rare-card">
          { cardRare }
        </p>

        { isTrunfo }

      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
