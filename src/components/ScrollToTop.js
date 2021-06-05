import React, { useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
  const [isScroll, setIsScroll] = useState(false);

  if (window.pageYOffset > 20) {
    setIsScroll(true);
  } else {
    setIsScroll(false);
  }

  return (
    isScroll && (
      <Wrapper>
        <img
          src="https://kun.uz/assets/4da8d774/img/cd-top-arrow.svg"
          alt="top"
        />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  background: rgba(11, 11, 179, 0.405);
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  img {
    width: 2rem;
  }
`;

export default ScrollToTop;
