import React from "react";
import styled from "styled-components";

const ArticleMessage = () => {
  return (
    <Wrapper>
      <img
        src="https://storage.kun.uz/source/thumbnails/_medium/7/YMoVmIP0IZNBB8vXdaOleP3l3kW4ASyp_medium.jpeg"
        alt="remote"
      />
      <h6>date</h6>
      <h4 className="section-center">
        «Реклама тўғрисида»ги янги қонун ОАВ эркинлиги ва бизнес ривожига яна
        бир тўсиқ бўлиши мумкин
      </h4>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis eum perferendis cumque sunt. Voluptatem fugiat libero molestiae, quidem reiciendis rerum neque error in assumenda repellendus beatae et autem consequatur?
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  height: 24rem;
  img {
    width: 100%;
    height: 20rem;
  }
  h6 {
    transform: translate(1rem, -2.2rem);
    padding: 0.5rem;
    width: 8rem;
    color: rgb(137, 137, 137);
    z-index: 10;
    background: white;
    margin: 0;
    border-radius: 0.4rem 0.4rem 0 0;
  }
  h4 {
    margin: 0 auto;
    transform: translateY(-1.5rem);
    margin-bottom: 0;
  }

  h5{
    display: none;
  }

  @media (min-width: 900px) {
    height: 35rem;
    h6{
      border-radius: 0;
      background: blue;
      color: white;
      margin-bottom: 0;
    }
    h5{
      display: flex;
      margin-top: 0
    }
  }
`;

export default ArticleMessage;
