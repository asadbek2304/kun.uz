import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Hududlar from '../components/Hududlar';
import Navbar from '../components/Navbar';
import News from '../components/News';
import NewsList from '../components/NewsList';
import Tanlov from '../components/Tanlov';

const SingleNew = () => {
    const {newId} = useParams();
    return (
      <Wrapper>
        <Navbar singlePage={true}/>
        <div className="hududlar">

        <Hududlar />
        </div>

        <div className="container">
          <div className="recent">
            <News recent={true} />
          </div>
          <div className="content">
            <img
              src="https://storage.kun.uz/source/7/fkEYYsPtfp6yB4ztabkZOaai0w-aX792.jpg"
              alt="test"
            />
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur sint at omnis excepturi architecto! Quod, minima odio
              quibusdam laudantium distinctio repellat. Laudantium adipisci
              culpa consequuntur fugit, eos odit numquam quas facilis impedit id
              sed enim quia commodi, quaerat ratione tenetur reiciendis sequi?
              Veniam impedit voluptatum repudiandae saepe dignissimos officia,
              quod consequuntur fugit dolores fugiat autem obcaecati!
              Consectetur distinctio at, placeat nesciunt eaque eligendi soluta
              ex tempore, delectus unde vel non voluptatum accusantium nobis
              nihil. Sint libero dolor nam doloribus dolores vero dolorum
              pariatur aperiam, nisi fugiat reprehenderit, iure perspiciatis.
            </h4>
          </div>
          <div className="recent">
            <News recent={false} />
          </div>
          .
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.main`
    .container{
        display: flex;
        .recent{
            width: 20%;
        }
        .content{
            margin: 0 2rem;
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
    @media (max-width: 900px) {
        .container{
            .recent{
                display: none
            }
        }
        .hududlar{
            display: none
        }
    }
`

export default SingleNew;