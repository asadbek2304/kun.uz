import React from "react";
import styled from "styled-components";
import Nom from "./Nom";

const News = ({ recent }) => {
  return (
    <Wrapper>
      {recent ? <Nom title='Сўнги янгиликлар'/> : null}
      {!recent ? (
        <div className="section section-center">
          <div className="image-container">
            <img
              src="https://storage.kun.uz/source/thumbnails/_medium/7/55kx_zVf9-9AgevkXdgL1OoZGyRFjKzf_medium.jpg"
              alt="title"
            />
          </div>
          <div className="info">
            <h4> 14:44 / 29.05.2021</h4>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia numquam hic assumenda.
            </h2>
          </div>
        </div>
      ) : (
        <div className="section section-center">
          <div className="info">
            <h4> 14:44 / 29.05.2021</h4>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt consequuntur amet.
            </h2>
          </div>
          <div className="image-container">
            <img
              src="https://storage.kun.uz/source/thumbnails/_medium/7/55kx_zVf9-9AgevkXdgL1OoZGyRFjKzf_medium.jpg"
              alt="title"
            />
          </div>
        </div>
      )}
      <hr className="section-center" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 5rem;
  margin-bottom: 1rem;
  &:hover{
    cursor: pointer;
    color: blue;
  }
  .recent {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .section {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    .image-container {
      width: 20rem;
      height: 5rem;
      margin-bottom: 0;
      margin-right: 1rem;
      img {
        height: 90%;
        width: 100%;
        border-radius: 0.3rem;
      }
    }
    .info {
      h4 {
        margin: 0;
        font-size: 0.7rem;
        color: rgb(117, 117, 119);
      }
      h2 {
        margin-top: 0;
        font-size: 0.8rem;
      }
    }
  }

  @media (min-width: 900px) {
    margin-bottom: 2.5rem;
  }
`;

export default News;
