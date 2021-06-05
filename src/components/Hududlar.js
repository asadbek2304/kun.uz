import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const Hududlar = () => {
    const {hududlar} = useGlobalContext()
  return (
    <Wrapper className="section-center">
      <div className="tittle">
        <h5>Ҳудудлар</h5>
      </div>
      {hududlar.map((hudud, i)=> {
          return <div key={i} className='hudud'>{hudud}</div>
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(227, 227, 227);
    height: 3rem;
    margin-bottom: 1rem;
      h5 {
        margin: 0 1rem;
        color: white;
        cursor: pointer;
    }

    .hudud {
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0 0.5rem;
      &:hover {
        color: blue;
      };
      &::before {
        width: 2px;
        background: black;
        transform: translateX(-1rem);
      }
    }
  }
`;

export default Hududlar;
