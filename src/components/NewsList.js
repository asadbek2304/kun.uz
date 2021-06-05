import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import News from './News';

const NewsList = () => {
    return (
      <Wrapper>
        <News recent={false}/>
        <News recent={true}/>
        <Link to='/lenta'>барчаси</Link>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  min-height: 20rem;
  a {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    text-decoration: none;
    padding: 0.7rem;
    background: rgb(180, 180, 180);
    color: black;
  }
  @media (min-width: 900px) {
    a {
      display: none;
    }
  }
`;

export default NewsList