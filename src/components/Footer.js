import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Fotter>
      <div className="header">
        <div className="links">
          <h3>Сайт ҳақида</h3>
          <h3>RSS</h3>
          <h3>Алоқа</h3>
          <h3>Реклама</h3>
          <h3>Кун мавзулари</h3>
          <h3>Kun.uz жамоаси</h3>
        </div>
        <img
          src="https://kun.uz/assets/4da8d774/img/18plus-v2.svg"
          alt="18plus"
        />
      </div>
      <div className="bottom">
        <div className="text">
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea placeat
            quaerat quibusdam atque sed non quos sint ex, earum molestias
            excepturi cumque. Consequuntur cumque, laudantium earum temporibus
            ipsum vel mollitia optio aliquam amet blanditiis fuga? Nihil
            repudiandae at ab quaerat temporibus voluptate aliquam!
          </h4>
        </div>

        <div className="social">
          <img
            src="https://kun.uz/assets/4da8d774/img/social-youtube.svg"
            alt="you tube"
          />
          <img
            src="https://kun.uz/assets/4da8d774/img/social-telegram.svg"
            alt="telegram"
          />
          <img
            src="https://kun.uz/assets/4da8d774/img/social-facebook.svg"
            alt="facebook"
          />
          <img
            src="https://kun.uz/assets/4da8d774/img/social-twitter.svg"
            alt="twitter"
          />
          <img
            src="https://kun.uz/assets/4da8d774/img/social-instagram.svg"
            alt="instagram"
          />
          <img
            src="https://kun.uz/assets/4da8d774/img/social-rss.svg"
            alt="instagram"
          />
        </div>
      </div>
    </Fotter>
  );
};

const Fotter = styled.footer`
  height: 15rem;
  .header {
    height: 3rem;
    width: 100%;
    background: #1c2680;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .links {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;
      padding: 0 1rem;
      color: white;
      h3{
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    img {
      padding: 0 1rem;
      cursor: pointer
    }
  }

  .bottom {
      height: 12rem;
      background: #17206a;
      display: grid;
      grid-template-columns: 2fr 1fr;
      
      .text{
        padding: 0 1rem;
        line-height: 3rem;
        height: 100%;
        color: white;
    }

    .social{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img{
            transition: 0.5s;
            padding: 0 1rem;
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            &:hover{
                transform: translateY(-5px)
            }
        }
    }
  }
  @media (max-width: 900px) {
    display: none
  }
`;

export default Footer;
