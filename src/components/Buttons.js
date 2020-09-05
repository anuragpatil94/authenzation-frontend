import React from 'react';

/* @jsx jsx */
// eslint-disable-next-line
import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';
import { useTheme } from '../utils/hooks';
import { Link } from 'react-router-dom';

const StyledButton = styled.button(({ variant, theme }) => {
  const css = {
    cursor: 'pointer',
    border: 'none',
    color: theme.textColorLight,
    display: 'block',
    margin: '8px 0',
    padding: '8px 16px',
  };
  switch (variant) {
    case '_secondary':
      return {
        ...css,
        backgroundColor: 'transparent ',
        color: theme.textColorDark,
        borderBottom: `2px solid ${theme.secondary}`,
        padding: '1px 8px',
        '&:hover': {
          color: theme.primaryHover,
          borderBottom: `2px solid ${theme.primaryHover}`,
        },
      };
    case 'secondary':
      return { ...css, borderRadius: '4px', backgroundColor: theme.secondary };
    case 'primary':
    default:
      return { ...css, borderRadius: '4px', backgroundColor: theme.primary };
  }
});

function Button(props) {
  const { themeSettings } = useTheme();
  return <StyledButton theme={themeSettings} {...props} />;
}

function LinkButton({ to, ...props }) {
  const { themeSettings } = useTheme();
  return (
    <Link css={{ textDecoration: 'none' }} to={to}>
      <StyledButton theme={themeSettings} {...props} />
    </Link>
  );
}

export { Button, LinkButton };
