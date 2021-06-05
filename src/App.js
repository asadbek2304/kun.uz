import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import Lenta from './pages/Lenta'
import Media from "./pages/Media";
import SingleNew from './pages/Singlenew'
function App() {
  return (<Router>
  <Search />
    <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/lenta">
          <Lenta />
        </Route>
        <Route exact path='/media'>
          <Media />
        </Route>
        <Route exact path='/maqola'>
          <ArticlePage />
        </Route>
        <Route exact path='/news/:newId'>
          <SingleNew />
        </Route>
      </Switch>
      <BottomNavbar />
      <Footer />
    </Router>
  );
}

export default App;
