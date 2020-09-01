import React from 'react';
import styled from '@emotion/styled/macro';

export { StyledButton as Button };

const StyledButton = styled.button(
  {
    border: 'none',
    color: 'white',
    display: 'block',
    margin: '8px 0',
    padding: '8px 16px',
    borderRadius: '4px',
  },
  ({ variant }) => {
    switch (variant) {
      case '_secondary':
        return {
          backgroundColor: 'transparent ',
          color: '#333',
          borderBottom: '2px solid #979dac',
          padding: '1px 8px',
          '&:hover': {
            color: '#0353a4',
            borderBottom: '2px solid #0353a4',
          },
        };
      case 'secondary':
        return { backgroundColor: '#7d8597' };
      case 'primary':
      default:
        return { backgroundColor: '#0466c8' };
    }
  },
);
