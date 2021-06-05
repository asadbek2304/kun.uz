import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { languageData } from "../util/data";
import Places from "./Places";
import SearchBar from "./SearchBar";

const Navbar = ({singlePage}) => {
  const { openSidebar, openSearchBar, ruknlar, isSearchMode, closeSearchBar } = useGlobalContext();
  if(!singlePage) {
return (
  <Wrapper>
    <div className="section section-center">
      <button className="search" onClick={openSearchBar}>
        <img
          src="https://kun.uz/assets/5b0ff1ca/images/icons/loop.svg"
          alt="search"
        />
      </button>
      <Link to="/" className="logo">
        <img
          src="https://kun.uz/assets/cd6ab492/img/kun-uz-logo.svg"
          alt="logo"
        />
      </Link>

      {!isSearchMode ? (
        <div className="ruknlar">
          <Places array={ruknlar} />{" "}
        </div>
      ) : (
        <SearchBar />
      )}

      <div className="controller">
        <div className="language">{languageData[0].title}</div>
        <button onClick={isSearchMode ? closeSearchBar : openSearchBar}>
          <img
            src={`${
              !isSearchMode
                ? "https://kun.uz/assets/4da8d774/img/new-search-icon.svg"
                : "https://kun.uz/assets/dbcd922c/images/icons/close-modal.svg"
            }`}
            alt="search"
          />
        </button>
      </div>
      <button className="menu" onClick={openSidebar}>
        <img
          src="https://kun.uz/assets/5b0ff1ca/images/icons/hamburger.svg"
          alt="hamburger"
        />
      </button>
    </div>
  </Wrapper>
);
  }
  return (
    <Wrapper>
      <div className="section section-center">
        <Link to='/'>
          <img
            style={{ background: "white", borderRadius: "5px" }}
            src="https://kun.uz/assets/dbcd922c/images/icons/chevron-right.svg"
            alt="back"
          />
        </Link>

        <img
          src="https://kun.uz/assets/dbcd922c/images/logos/blue-logo.svg"
          alt="logo"
        />

        <Link to='/share'>
          <img
            src="https://kun.uz/assets/dbcd922c/images/icons/share.svg"
            alt="share"
          />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search {
      img {
        width: 1.5rem;
      }
    }
    .logo {
      img {
        width: 4rem;
      }
    }

    .ruknlar {
      display: none;
    }
    .menu {
      cursor: pointer;
      border: none;
      background: transparent;
      img {
        width: 1.5rem;
      }
    }

    .search {
      border: none;
      background: transparent;
    }

    .controller {
      display: none;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .section {
      transition: all 2s ease;
      .search {
        display: none;
      }
      .menu {
        display: none;
      }

      .ruknlar {
        display: flex;
        justify-content: center;
      }
      .controller {
        display: flex;
        position: relative;
        .language {
          display: flex;
          align-items: center;
          background: rgb(227, 227, 227);
          height: 2rem;
          border-radius: 2rem;
          width: 8rem;
          margin-right: 0;
          cursor: pointer;
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
          width: 2rem;
          transition: 0.5s;
        }

        .language::before {
          background: transparent;
          transform: translate(6rem, 2px);
          width: 1rem;
          content: url(https://kun.uz/assets/cd6ab492/img/toggle-circle-v2.svg);
        }
      }
    }
  }
`;

export default Navbar;
