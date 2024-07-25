import React from 'react';
import styled from 'styled-components';

const DoughStyle = styled.div`
select {
  font-size:0.9rem;
  margin-right: 10px;
  padding: 2px;
  border:#5F5F5F solid 0.01rem;
  border-radius: 0.3rem;
  font-family: "Barlow", sans-serif;
}`

function DoughSelection({ dough, handleChange }) {
  return (
    <div>
      <DoughStyle>
      <label htmlFor="dough">Dough Thickness:</label>
      <select name="dough" id="dough" value={dough} onChange={handleChange} data-cy="input-dough">
        <option value="thin" >Thin</option>
        <option value="medium">Medium</option>
        <option value="thick">Thick</option>
      </select>
      </DoughStyle>
    </div>
  );
}

export default DoughSelection;