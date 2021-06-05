import React from 'react';
import styled from 'styled-components';

const Circle = () => {
    return <Wrapper>
        <div></div>
    </Wrapper>
}

const Wrapper = styled.div`
width: 1rem;
height: 1rem;
border-radius: 50%;
background: blue;
display: flex;
justify-content: center;
align-items: center;
margin-right: 1rem;
div{
    width: 0.5rem;
    height: 0.5rem;
    background: white;
    border-radius: 50%
}
`

export default Circle;