import React from 'react';

function HamurSecimi({ hamur, handleChange }) {
  return (
    <div>
      <label htmlFor="hamur">Hamur Kalınlığı:</label>
      <select name="hamur" id="hamur" value={hamur} onChange={handleChange}>
        <option value="ince" data-cy="input-hamur">İnce</option>
        <option value="orta">Orta</option>
        <option value="kalın">Kalın</option>
      </select>
    </div>
  );
}

export default HamurSecimi;