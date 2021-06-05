import React from 'react';
import styled from 'styled-components';

const Card2 = () => {
return (
  <Wrapper>
    <img
      src="https://storage.kun.uz/source/thumbnails/_medium/7/OVkJGnQs-Kyki8sGfpmCMeIrbKlcmtlI_medium.jpg"
      alt="title"
    />
    <h5>
      Ўтган йил ўрик экспорт қилиш бўйича дунёда етакчилардан бўлган Ўзбекистон
      энди ушбу мева импортёрига айланди
    </h5>
  </Wrapper>
);

}

const Wrapper = styled.div`
margin-top: 1rem;
    width: 100%;
    height: 17rem;
    img{
        width: 100%;
        height: 13rem;
        border-radius: 0.5rem;
    }

    h5{
        margin: 0;
        &:hover{
          color: blue;
          cursor: pointer;
        }
    }

    @media (min-width: 900px) {


    }
`;

export default Card2;