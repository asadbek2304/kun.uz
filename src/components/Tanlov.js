import React from 'react' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NewsGallery from './NewsGallery'
import Nom from './Nom'

const Tanlov = () => {
    return (
      <Wrapper>
        <div className="header section-center">
          <Nom title="Муҳаррир танлови" />
          <Link to="/media">
            <img className='arrow'
              src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png"
              alt="more"
            />
          </Link>
        </div>
        <div className="gallery">
          <NewsGallery />
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
height: 20rem;
margin-bottom: 1rem;
.arrow{
  width: 2rem;
}
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
}
.gallery{
    overflow-y: hidden;
    &::-webkit-scrollbar{
      display: none;
    }
}

@media(min-width: 900px) {
  height: 24rem;
}
`

export default Tanlov