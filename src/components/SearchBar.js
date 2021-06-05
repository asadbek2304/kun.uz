import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    return (
      <SearchContainer className='section-center'>
        <img
          src="https://kun.uz/assets/5b0ff1ca/images/icons/search.svg"
          alt="search icon"
        />
        <input type="text" placeholder='Қидирув'/>
      </SearchContainer>
    );
}

const SearchContainer = styled.div`
  display: flex;
  background: rgb(227, 227, 227);
  align-items: center;
  height: 2.5rem;
  border-radius: 0.6rem;
  img{
    width: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  input{
    background: transparent;
    border: none;
    width: 90%;
    outline: none;
  }
  @media (min-width: 900px) {
    background: transparent;
    width: 80%;
    input{
      width: 100%;
    }
  }
`;

export default SearchBar;