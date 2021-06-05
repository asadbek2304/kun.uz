import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { languageData } from "../util/data";
import Places from "./Places";
import ToggleBar from "./ToggleBar";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, ruknlar, hududlar } = useGlobalContext();
  return (
    <Wrapper>
      <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : null}`}>
        <div className="controller">
          <button onClick={closeSidebar} className="close-modal">
            <img
              src="https://kun.uz/assets/dbcd922c/images/icons/close-modal.svg"
              alt="close modal"
            />
          </button>
          <img
            src="https://kun.uz/assets/dbcd922c/images/logos/profile-logo.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <ToggleBar data={languageData} type="language" />
        <div className="ruknlar section-center" onClick={closeSidebar}>
          <h3>Рукнлар</h3>
          <Places array={ruknlar} />
        </div>

        <div className="hududlar section-center" onClick={closeSidebar}>
          <h3>Ҳудудлар</h3>
          <Places array={hududlar} />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    transition: 0.3s;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
    opacity: 0;
    overflow-y: scroll;
  }
  .controller {
    height: 10rem;
    background: url(https://kun.uz/assets/dbcd922c/images/profile-page-mask.png);
    background-repeat: no-repeat;
    background-size: auto;
    zoom: 1.1;
    margin-bottom: 1rem;
  }
  .logo {
    position: absolute;
    top: 5rem;
    left: 35%;
  }
  .close-modal {
    position: absolute;
    top: 2rem;
    right: 0.3rem;
    background: none;
    border: none;
    outline: none;
  }
  .show-sidebar {
    z-index: 10;
    opacity: 1;
  }

  .hududlar {
    margin-bottom: 10rem;
    background: url(https://kun.uz/assets/5b0ff1ca/images/icons/map.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default Sidebar;
