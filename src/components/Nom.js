import React from 'react';
import styled from 'styled-components';
import Circle from './Circle'

const Nom = ({title}) => {
return (
  <Wrapper className='section-center'>
    <Circle />
    <h2>{title}</h2>
  </Wrapper>
);

}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 0;
    padding: 0;
    color: black
  }
`;

export default Nom