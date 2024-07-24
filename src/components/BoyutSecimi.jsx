import React from 'react';

function BoyutSecimi({ boyut, handleChange }) {
  return (
    <div>
      <div>
        <input type="radio" id="kucuk" name="boyut" value="kucuk" checked={boyut === 'kucuk'} onChange={handleChange} />
        <label htmlFor="kucuk" data-cy="input-boyut"> Küçük</label>
      </div>
      <div>
        <input type="radio" id="orta" name="boyut" value="orta" checked={boyut === 'orta'} onChange={handleChange} />
        <label htmlFor="orta"> Orta</label>
      </div>
      <div>
        <input type="radio" id="buyuk" name="boyut" value="buyuk" checked={boyut === 'buyuk'} onChange={handleChange} />
        <label htmlFor="buyuk"> Büyük</label>
      </div>
    </div>
  );
}

export default BoyutSecimi;