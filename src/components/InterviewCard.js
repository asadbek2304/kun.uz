import React from 'react';
import styled from 'styled-components';

const InterviewCard = () => {
   return (
     <Wrapper>
       <img
         src="https://storage.kun.uz/source/thumbnails/_medium/7/qkhtd_oNCqVnaNrn-e4RtLMVbeqQdu0A_medium.jpg"
         alt="chol"
       />
        <h2>Интервю</h2>
       <h6>date</h6>
        
       <h5>
         «Саволлар кўп, жавоб йўқ» – ўзбек жамияти муаммолари ҳақида Хуршид
         Дўстмуҳаммад билан суҳбат
       </h5>
     </Wrapper>
   );
}

const Wrapper = styled.div`
height: 23rem;
margin-top: 1rem;
background: white;
img {
    height: 18rem;
    width: 100%;
};
h6 {
    transform: translate(1rem, -3rem);
    padding: 0.6rem;
    color: rgb(137, 137, 137);
    background: white;
    border-radius: 1rem;
    margin: 0;
    width: 8rem;
};

h5{
    transform: translateY(-2rem);
    margin: 0;
    padding: 0.6rem;
}

h2{
  display: none
}

@media (min-width: 900px) {
  h6{
    display: none
  }

  &:hover{
    cursor: pointer;
    color: blue;
  }

  img{
    margin-bottom: 2rem;
    height: 10rem;
    box-shadow: 8px 10px blue;
    width: 85%;
    transform: translate(-12px, -10px)
  }

  h5{
    font-size: 1.5rem;

  };

  h2{
    margin: 0;
    display: block;
    position: relative;
    transform: rotate(-90deg);
    bottom: 15rem;
    left: 8rem;
    user-select: none;
    color: whitesmoke
  }
}
`;

export default InterviewCard