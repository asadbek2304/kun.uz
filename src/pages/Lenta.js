import React from 'react';
import styled from 'styled-components';
import News from '../components/News';

const Lenta = () => {
    return (
      <Wrapper>
        <h3 className='center'>Сўнгги янгиликлар</h3>
        <News recent={false} />
      </Wrapper>
    );
} 

const Wrapper = styled.div`
background: whitesmoke;
    h3{
      margin-top: 0;
      padding-top: 1rem;
        text-align: center;
    }
`

export default Lenta;