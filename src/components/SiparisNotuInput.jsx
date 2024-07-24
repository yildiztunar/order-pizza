import React from 'react';

function SiparisNotuInput({ siparisNotu, handleChange }) {
  return (
    <div>
      <input
        type="text"
        id="siparisNotu"
        name="siparisNotu"
        rows="1"
        placeholder="Siparisine eklemek istedigin bir not var mi?"
        value={siparisNotu}
        onChange={handleChange}
        data-cy="input-siparisNotu"
      />
    </div>
  );
}

export default SiparisNotuInput;