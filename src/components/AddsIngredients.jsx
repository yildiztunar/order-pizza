import React from 'react';
import styled from 'styled-components';

const IngredientsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  text-align: left;
  color: #292929;
  font-weight: bold;
  

  label {
    margin: 5px 0;
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 10px;
  }
`;

function AddsIngredients({ addtIngredients, handleChange }) {
  const ingredientList = [
    { label: 'Pepperoni', value: 'Pepperoni', dataCy: 'checkbox-1' },
    { label: 'Sausage', value: 'Sausage', dataCy: 'checkbox-2' },
    { label: 'Canadian Bacon', value: 'CanadianBacon', dataCy: 'checkbox-3' },
    { label: 'Grilled Chicken', value: 'GrilledChicken', dataCy: 'checkbox-4' },
    { label: 'Onion', value: 'Onion' },
    { label: 'Tomato', value: 'Tomato' },
    { label: 'Corn', value: 'Corn' },
    { label: 'Salami', value: 'Salami' },
    { label: 'Jalapeno', value: 'Jalapeno' },
    { label: 'Garlic', value: 'Garlic' },
    { label: 'Pepper', value: 'Pepper' },
    { label: 'Chorizo', value: 'Chorizo' },
    { label: 'Pineapple', value: 'Pineapple' },
    { label: 'Zucchini', value: 'Zucchini' }
  ];

  return (
    <IngredientsStyle>
      {ingredientList.map((ingredient, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name="addtIngredients"
            value={ingredient.value}
            checked={addtIngredients.includes(ingredient.value)}
            onChange={handleChange}
            data-cy={ingredient.dataCy}
          />
          {ingredient.label}
        </label>
      ))}
    </IngredientsStyle>
  );
}

export default AddsIngredients;

