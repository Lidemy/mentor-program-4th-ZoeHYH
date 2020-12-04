import Header from "../Header";
import HomePage from "../../Page/HomePage";
import ListPage from "../../Page/ListPage";
import ArticlePage from "../../Page/ArticlePage";
import AboutPage from "../../Page/AboutPage";
import PostPage from "../../Page/PostPage";
import LoginPage from "../../Page/LoginPage";
import RegisterPage from "../../Page/RegisterPage";
import { AuthContext } from "../../contexts";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../WebApi";
import { getAuthToken } from "../../utils";

export default function Blog() {
  const [isGetAPI, setIsGetAPI] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (getAuthToken())
      getUser().then((data) => {
        if (data.ok) {
          setUser(data.data);
        }
      });
    setIsGetAPI(true);
  }, []);
  return (
    <AuthContext.Provider value={{ isGetAPI, setIsGetAPI, user, setUser }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/list">
            <Redirect to="/list/1" />
          </Route>
          <Route exact path="/list/:page">
            <ListPage />
          </Route>
          <Route exact path="/article-:id">
            <ArticlePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/post">
            {user ? <PostPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
            {!user ? <LoginPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/register">
            {!user ? <RegisterPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}
