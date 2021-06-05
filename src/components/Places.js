import React from "react";
import styled from "styled-components";

const Places = ({ array }) => {
  return (
    <Wrapper className="section-center">
      {array.map((hudud, i) => {
        return (
          <div className="link" key={i}>
            <img
              src="https://kun.uz/assets/dbcd922c/images/icons/menu-icon.svg"
              alt="check"
            />
            <h5>{hudud}</h5>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .link {
    display: flex;
    h5 {
      margin: 0.5rem;
      font-size: 1rem;
      &:hover {
        cursor: pointer;
        color: blue;
      }
      &:active {
        color: blue;
      }
    }
  }

  @media (min-width: 900px) {
    .link {
      img {
        display: none;
      }
      h5 {
        font-size: 1rem;
      }
    }

    display: flex;
    gap: 1rem;
  }
`;

export default Places;
