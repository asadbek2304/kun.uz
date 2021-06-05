import React from "react";
import styled from "styled-components";
import Articles from "../components/Articles";
import CurrentMessage from "../components/CurrentMessage";
import Daynew from "../components/Daynew";
import Interview from "../components/Interview";
import Navbar from "../components/Navbar";
import News from "../components/News";
import NewsList from "../components/NewsList";
import Surishtiruv from "../components/Surishtiruv";
import Tanlov from "../components/Tanlov";
import Hududlar from "../components/Hududlar";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hududlar />
      <div className="bir">
        <div className="container1">
          <Daynew />
          <div className="visible">
            <NewsList />
          </div>
          <div className="news-list">
            <News recent={false} />
            <News recent={false} />
            <News recent={false} />
            <News recent={false} />
          </div>
          <Tanlov />
        </div>
        <div className="news">
          <News recent={true} />
          <News recent={false} />
          <News recent={false} />
          <News recent={false} />
          <News recent={false} />
          <News recent={false} />
          <News recent={false} />
          <News recent={false} />
          <button>
            Кўпроқ янгиликлар
            <img
              src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png"
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <CurrentMessage />
      <Surishtiruv />
      <Articles page={true} />
      <Interview />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .news{
    display: none;
  };
  background: whitesmoke;
  @media (min-width: 900px) {
    background: white;
    .visible {
      display: none;
    }
    .container1 {
      width: 65%;
      margin: 0 auto
    }

    .bir{
      display: flex;
    }

    .news{
      display: block;
      flex: 0;
      button{
        margin: 2rem;
        background: rgb(227, 227, 227);
        height: 4rem;
        border-left: 5px solid blue;
        border-top: none;
        border-right: none;
        cursor: pointer;
        border-bottom: none;
        font-size: 1rem;
        text-align: start;
        width: 90%;
        border-radius: 0 3rem 3rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        img{
          width: 2rem;
        }
      }
    }

    .news-list{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Home;
