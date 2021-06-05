import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";

let initialState = {
  isSidebarOpen: false,
  single_new: {},
  loading: false,
  languageCount: 0,
  mediaCount: 1,
  navCount: 0,
  ruknlar: [],
  hududlar: [],
  isSearchMode: false
};

if (localStorage.getItem("malumot")) {
  initialState = JSON.parse(localStorage.getItem("malumot"));
}

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const setLanguage = (count) => {
    dispatch({ type: "SET_LANGUAGE", payload: count });
  };

  const setMedia = (count) => {
    dispatch({ type: "SET_MEDIA", payload: count });
  };

  const setNavCount = (count) => {
    dispatch({ type: "SET_NAV_COUNT", payload: count });
  };

  const fetchNews = () => {
    dispatch({ type: "FETCH_NEWS" });
  };

  const closeSearchBar = () => {
    dispatch({type: 'CLOSE_SEARCH'})
  }
  const openSearchBar = () => {
    dispatch({type: 'OPEN_SEARCH'})
  }

 useEffect(() => {
    localStorage.setItem("malumot", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <Context.Provider
      value={{
        openSidebar,
        closeSidebar,
        setLanguage,
        setMedia,
        setNavCount,
        openSearchBar,
        closeSearchBar,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};
