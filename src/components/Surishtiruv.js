import React from "react";
import styled from "styled-components";
import NewsGallery from "./NewsGallery";
import Nom from "./Nom";

const Surishtiruv = () => {
  return (
    <Wrapper>
      <Nom title="Kun.uz суриштируви" />
      <div className="gallery">
        <NewsGallery />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
margin-bottom: 1rem;
  .gallery {
      margin-top: 1rem;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Surishtiruv;
