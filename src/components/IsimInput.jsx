import React from 'react';

function IsimInput({ isim, handleChange }) {
  return (
    <div>
      <input
        type="text"
        id="isim"
        name="isim"
        rows="1"
        placeholder="İsminizi girin."
        value={isim}
        onChange={handleChange}
        data-cy="input-isim"
      />
    </div>
  );
}

export default IsimInput;