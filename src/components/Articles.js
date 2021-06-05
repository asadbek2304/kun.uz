import React from "react";
import styled from "styled-components";
import ArticleMessage from "./ArticleMessage";
import Nom from "./Nom";

const Articles = ({page}) => {
  return (
    <Wrapper>
      {page ? <Nom title="Мақолалар" /> : <h4 style={{textAlign: 'center'}}>Мақолалар</h4>}
      <div className="container">

      <ArticleMessage />
      <ArticleMessage />
      <ArticleMessage />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
  background: white;
  @media (min-width: 900px) {
    .container{
      width: 98% !important;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      margin: 0 auto
    }
  }
`;

export default Articles;
