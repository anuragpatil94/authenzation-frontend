import React from 'react';

function AuthSelectorForm({ authSelector }) {
  return (
    <form>
      <label>
        <input
          type="radio"
          name="AuthType"
          value="Basic"
          checked={authSelector.authType === 'basic'}
          onChange={() => authSelector.setAuthType('basic')}
        />
        Basic
      </label>
      <label>
        <input
          type="radio"
          name="authtype"
          value="JWT"
          checked={authSelector.authType === 'JWT'}
          onChange={() => authSelector.setAuthType('JWT')}
        />
        JWT
      </label>
    </form>
  );
}

export default AuthSelectorForm;
