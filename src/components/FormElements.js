import React from 'react';

import styled from '@emotion/styled/macro';
import { useTheme } from '../utils/contexts/Theme';

const StyledInput = styled.input(({ theme }) => ({
  width: '100%',
  borderRadius: ' 4px',
  padding: '8px 16px',
  margin: '8px 0',
  border: 'none',
  backgroundColor: theme.inputBackground,
  '&:focus': {
    outline: 'none',
    border: `1px solid ${theme.inputFocusBorder}`,
  },
}));

function Input(props) {
  const { themeSettings } = useTheme();
  return <StyledInput theme={themeSettings} {...props} />;
}

export { Input };
