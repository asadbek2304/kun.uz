import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import SearchBar from "./SearchBar";

const Search = () => {
    const {isSearchMode, closeSearchBar} = useGlobalContext();
    return (
      <SearchContainer>
        <aside className={`search ${isSearchMode && "show-search"}`}>
        <button onClick={closeSearchBar}>
          <img
            src="https://kun.uz/assets/5b0ff1ca/images/icons/close-v2.svg"
            alt="close search"
          />
        </button>
          <SearchBar />
        </aside>
      </SearchContainer>
    );
}

const SearchContainer = styled.div`
.search{
     transition: all 0.2s;
     position: fixed;
     top:0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: -1;
     opacity: 0;
     background: white;
 }

 button{
     position: relative;
     background: transparent;
     top: 1rem;
    left: 90%;
     margin-bottom: 2rem;
     border: none;
     img{
         width: 1.7rem;
     }
 }

 .show-search{
     z-index: 10;
     opacity: 1
 }

 @media (min-width: 900px) {
   display: none;
 }
 `;


 export default Search;