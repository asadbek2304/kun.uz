import React from "react";
import styled from "styled-components";

const Daynew = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img
          src="https://storage.kun.uz/source/thumbnails/_medium/7/4_5rU3uFSW4W771Qw7HyYdHDJtMgtxji_medium.jpg"
          alt="day photo"
        />
      </div>
      <div className="info section-center">
        <h2>
          Тошкентда соғлом ҳомила туғруқхонада нобуд бўлди. Шифокорлар пул
          берилмагани учун бепарво бўлганми?
        </h2>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam iusto reprehenderit ad maiores unde magni, ex molestias, iure, in consequuntur velit soluta nihil eos accusamus tempore consectetur nemo totam. Ad delectus voluptatum quas repudiandae obcaecati excepturi velit cum, rerum adipisci, rem odio, quia temporibus optio impedit et quae ab tempora ipsam architecto quasi. Hic, dolorem dicta?
        </h5>
        <h4>20:10 / 29.05.2021</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 22rem;
  margin-bottom: 1rem;
  cursor: pointer;
  .image-container {
    width: 100%;
    margin-bottom: 2rem;
    display: block;
    img {
      height: 12rem;
      width: 100%;
    }
  }
  .info {
    h2 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
      color: rgb(117, 117, 119);
      background: transparent;
    }
    h5 {
      display: none;
    }
  }

  @media (min-width: 700px) {
    height: 25rem;
    .image-container {
      width: 100%;
      img {
        height: 20rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 900px) {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: whitesmoke;
    width: 100%;
    .image-container {
      height: 100%;
      margin-bottom: 0;
      img {
        height: 100%;
      }
    }

    .info {
      h2{
        font-size: 1.5rem
      }
      padding: 1rem 0.2rem;

      h5{
        display: flex;
      }
    }
  }
`;

export default Daynew;
