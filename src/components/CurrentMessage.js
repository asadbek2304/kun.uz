import React from "react";
import styled from "styled-components";
import Card2 from "./Card2";
import Nom from "./Nom";

const CurrentMessage = () => {
  return (
    <Wrapper className="section-center">
      <Nom title="Долзарб хаьарлар" />
      <div className="current">
        <div className="current1">
          <Card2 />
        </div>
        <div className="current2">

        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  margin-bottom: 1rem;
  @media (min-width: 900px) {
      .current{
          display: flex;
          gap: 1rem;
          .current1{
              width: 100%;
              height: 40rem;
              img{
                  height: 30rem;
                  margin-bottom: 1rem;
                  border-radius: 0
              }
              h5{
                  font-size: 1.5rem;
              }
          }

          .current2{
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
              img{

                  border-radius: 0
              }
          }
      }
  }
`;

export default CurrentMessage;
