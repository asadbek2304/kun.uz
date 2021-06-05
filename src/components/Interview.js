import React from 'react';
import styled from 'styled-components';
import InterviewCard from './InterviewCard';
import Nom from './Nom';

const Interview = () => {
    return <Wrapper>
    <div className="container section-center">

        <Nom title='Интервью' />
        <div className="cardlist">

        <InterviewCard />
        <InterviewCard />
    </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
  background: #007aff;
  margin-bottom: 1rem;
  .container {
    padding-bottom: 5rem;
  }

  @media (min-width: 900px) {
    margin-bottom: 0;
    background: whitesmoke;
    display: flex;
    .container {
      .cardlist {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem
      }
    }
  }
`;

export default Interview