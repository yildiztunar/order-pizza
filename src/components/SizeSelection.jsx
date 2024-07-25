import React from 'react';

function SizeSelection({ size, handleChange }) {
  return (
    <div>
      <div>
        <input type="radio" id="small" name="size" value="small" checked={size === 'small'} onChange={handleChange} data-cy="input-size"/>
        <label htmlFor="small" > Small</label>
      </div>
      <div>
        <input type="radio" id="medium" name="size" value="medium" checked={size === 'medium'} onChange={handleChange} />
        <label htmlFor="medium"> Medium</label>
      </div>
      <div>
        <input type="radio" id="large" name="size" value="large" checked={size === 'large'} onChange={handleChange} />
        <label htmlFor="large"> Large</label>
      </div>
    </div>
  );
}

export default SizeSelection;