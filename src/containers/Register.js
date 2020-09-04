/* @jsx jsx*/
// eslint-disable-next-line
import { jsx } from '@emotion/core';

import React from 'react';

import { Input, Button } from '../components';

function Register({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const { FirstName, LastName, Password, Username } = event.target.elements;
    const formData = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      Password: Password.value,
      Username: Username.value,
    };
    onSubmit(formData);
  };

  return (
    <div
      css={{
        margin: '0 auto',
        width: '100%',
        maxWidth: '300px',
        padding: '16px',
        border: '1px solid $ccc',
        borderRadius: '4px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Input
          name="Username"
          placeholder="Username"
          autoComplete="off"
        ></Input>
        <Input
          name="FirstName"
          placeholder="FirstName"
          autoComplete="off"
        ></Input>
        <Input
          name="LastName"
          placeholder="LastName"
          autoComplete="off"
        ></Input>
        <Input
          name="Password"
          placeholder="Password"
          autoComplete="off"
        ></Input>
        <Button type="Submit" variant="primary">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
