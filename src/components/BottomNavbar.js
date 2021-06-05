import React, { useState } from "react";
import styled from "styled-components";
import { bottomLinks } from "../util/data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const BottomNavbar = () => {
  const { setNavCount, navCount, closeSidebar } = useGlobalContext();
  return (
    <Wrapper onClick={closeSidebar}>
      <div className="section section-center">
        {bottomLinks.map((link, i) => {
          return (
            <Link
              onClick={() => setNavCount(i)}
              to={`${link.url}`}
              key={link.id}
              className={`card ${i === navCount && "active"}`}
            >
              <img src={link.icon} alt={link.label} />

              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  border-radius: 1rem 1rem 0 0;
  background: white;
  z-index: 20;
  .section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  };
  .active{
    border-top: 3px solid blue;
  }
  img{
      width: 1.2rem;
        display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  margin-bottom: 0;
  }
  p{
      margin-top: 0;
      margin-bottom: 0;
  }
  a{
    text-decoration: none;
    color: black;
  }
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

export default BottomNavbar;
