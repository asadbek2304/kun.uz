import React from "react";
import styled from "styled-components";
import Card from "./Card";

const NewsGallery = () => {
  return (
    <Wrapper>
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20rem;
  width: 80rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export default NewsGallery;
