import React from 'react';
import ReactDOM from 'react-dom';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/core';
import emotionStyled from '@emotion/styled';

const StyledWithEmotionOnly = emotionStyled.div({
  width: '50px',
  margin: '5px',
  height: '50px',
  backgroundColor: '#333',
});
const StyledWithTw = tw.div`
  bg-green-100

`;
// const StyledWithTailwindInJs = styled.div`
const StyledWithTailwindInJs = emotionStyled.div`
 ${tw`
  bg-green-200
 `}
  float:right;
 border-radius:4px;
 width: 50px;
 height:50px;


`;

const App = () => {
  return (
    <div>
      <StyledWithEmotionOnly />
      {/* <div tw="float-right bg-green-500">Hello</div> */}
      <StyledWithTailwindInJs></StyledWithTailwindInJs>
      <StyledWithTw>THis is Tailwind Styled Component</StyledWithTw>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
