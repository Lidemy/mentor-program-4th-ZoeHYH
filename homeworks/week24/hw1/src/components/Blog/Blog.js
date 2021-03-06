import Header from "../Header";
import HomePage from "../../page/HomePage";
import ListPage from "../../page/ListPage";
import ArticlePage from "../../page/ArticlePage";
import AboutPage from "../../page/AboutPage";
import PostPage from "../../page/PostPage";
import LoginPage from "../../page/LoginPage";
import RegisterPage from "../../page/RegisterPage";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import { getUser, selectIsLogin } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../../utils";
import EditPage from "../../page/EditPage";

export default function Blog() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  useEffect(() => {
    if (getAuthToken()) dispatch(getUser());
  }, [dispatch]);
  return (
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
          {isLogin ? <PostPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/edit-:id">
          {isLogin ? <EditPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!isLogin ? <LoginPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/register">
          {!isLogin ? <RegisterPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}
