import Header from "../Header";
import Homepage from "../../Page/Homepage";
import Listpage from "../../Page/Listpage";
import Articlepage from "../../Page/Articlepage";
import Aboutpage from "../../Page/Aboutpage";
import Postpage from "../../Page/Postpage";
import Loginpage from "../../Page/Loginpage";
import Registerpage from "../../Page/Registerpage";
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
  const [getApi, setGetApi] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (getAuthToken())
      getUser().then((data) => {
        if (data.ok) {
          setUser(data.data);
        }
      });
    setGetApi(true);
  }, []);
  return (
    <AuthContext.Provider value={{ getApi, setGetApi, user, setUser }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/list">
            <Redirect to="/list/1" />
          </Route>
          <Route exact path="/list/:page">
            <Listpage />
          </Route>
          <Route exact path="/article-:id">
            <Articlepage />
          </Route>
          <Route exact path="/about">
            <Aboutpage />
          </Route>
          <Route exact path="/post">
            {user ? <Postpage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
            {!user ? <Loginpage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/register">
            {!user ? <Registerpage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}
