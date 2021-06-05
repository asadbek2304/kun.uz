import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const ToggleBar = ({ data, type }) => {
  const {setLanguage, setMedia, languageCount, mediaCount} = useGlobalContext();
  let value = type === 'language' ? languageCount : mediaCount;

  return (
    <Wrapper>
      {data.map((d, i) => {
        return (
          <button
          key={i}
            className={`${i === value && "active"}`}
            onClick={() => {
                if(type === 'media') setMedia(i);
                if(type === 'language') setLanguage(i);
            }}
          >
            {d.title}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 94%;
  margin: 0 auto;
  height: 3rem;
  border-radius: 2rem;
  background: rgb(227, 227, 227);
  display: flex;
  justify-content: space-between;
  transition: all 3s;
  button {
    width: 30%;
    border-radius: 2rem;
    border: none;
    background: transparent;
    margin: 3px;
  }
  .active {
    background: white;
  }
`;

export default ToggleBar;
