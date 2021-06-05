import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
      <Wrapper>
        <img className='card-image'
          src="https://storage.kun.uz/source/thumbnails/_medium/7/cZDrTF_UWHukPj3rxxEUtUp0iVjd5q5b_medium.jpg"
          alt="rasm"
        />
        <p>date</p>
        <h4>Lorem ipsum dolor sit amet consectetur voluptatum ipsam doloremque repellendus corrupti obcaecati, impedit maiores laudantium at veniam similique?</h4>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  background: white;
  width: 18rem;
  height: 15rem;
  &:hover{
    cursor:pointer;
    color: blue
  }
  img {
    width: 100%;
    height: 10rem !important;
    margin: 0;
  }
  h4 {
    margin: 0;
    font-size: 0.7rem;
    padding: 0.4rem;
    &:hover{
      color: blue;
    }
}

p {
      font-size: 0.8rem;
      padding-left: 0.4rem;
    margin: 0;
    color: rgb(117, 117, 119);
  }

  @media (min-width: 900px) {
    h4{
      font-size: 1rem;
    }
  }
`;

export default Card