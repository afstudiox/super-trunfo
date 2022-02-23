import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input name="name-input" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          <input name="attr1-input" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input name="attr2-input" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input name="attr3-input" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input name="image-input" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          <select name="rare-input" type="text" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="triunfo-input">
          <input name="triunfo-input" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
