import React from 'react';

function NameInput({ username, handleChange }) {
  return (
    <div>
      <input
        type="text"
        id="username"
        name="username"
        rows="1"
        placeholder="Enter your name."
        value={username}
        onChange={handleChange}
        data-cy="input-username"
      />
    </div>
  );
}

export default NameInput;