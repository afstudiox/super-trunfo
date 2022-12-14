import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h1 className="titulo-form">
          Adicionar nova Carta
        </h1>

        <label htmlFor="name-input">
          <p>Nome:</p>
          <input
            className="cardName"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description-input">
          <p>Descrição:</p>
          <textarea
            className="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>

        <label className="container-atrr" htmlFor="attr1-input">
          <span>Attr1: </span>
          <input
            className="cardAttr1"
            name="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>

        <label className="container-atrr" htmlFor="attr2-input">
          <span>Attr2: </span>
          <input
            className="cardAttr2"
            name="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>

        <label className="container-atrr" htmlFor="attr3-input">
          <span>Attr3: </span>
          <input
            className="cardAttr3"
            name="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          <span>Imagem: </span>
          <input
            className="cardImage"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          <p>Raridade:</p>
          <select
            className="cardRare"
            name="cardRare"
            type="text"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        { hasTrunfo === false
          ? (
            <label className="container-trunfo" htmlFor="trunfo-input">
              <input
                className="cardTrunfo"
                name="cardTrunfo"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
              />
              <span>Super Trybe Trunfo</span>
            </label>)
          : 'Você já tem um Super Trunfo em seu baralho'}

        <button
          className="button-save"
          name="button-save"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
