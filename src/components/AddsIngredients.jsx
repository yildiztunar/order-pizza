import React from 'react';
import styled from 'styled-components';

const IngredientsStyle = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
text-align: left;
color: #292929;
font-weight: bold;
  
label {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}`;
const HiddenCheckbox = styled.input`
display: none;

&:checked + label::before {
  background-color: #FDC913;
  border-color: #FDC913;
}`;
const StyledLabel = styled.label`
position: relative;
padding-left: 3rem;
cursor: pointer;
user-select: none;

&::before {
  content: '';
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.2rem;
  background-color: #FAF7F2;
}`;

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
        <InputWrapper key={index}>
          <HiddenCheckbox
            type="checkbox"
            id={ingredient.value}
            name="addtIngredients"
            value={ingredient.value}
            checked={addtIngredients.includes(ingredient.value)}
            onChange={handleChange}
            data-cy={ingredient.dataCy}
          />
          <StyledLabel htmlFor={ingredient.value} data-size={ingredient.label.charAt(0)}>
            {ingredient.label}
          </StyledLabel>
        </InputWrapper>
      ))}
    </IngredientsStyle>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default AddsIngredients;
