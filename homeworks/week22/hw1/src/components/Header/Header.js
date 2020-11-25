import { useLocation, useHistory, Link } from "react-router-dom";
import { HeaderWrapper, Wrapper, Container, Brand } from "./style";
import { Nav, ButtonLink } from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { setAuthToken } from "../../utils";

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const { getApi, user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname === "/post") {
      history.push("/");
    }
  };
  return (
    <HeaderWrapper>
      <Wrapper>
        <Container>
          <Brand to="/">
            <ButtonLink isActive={true} content="ZoeHYH" />
          </Brand>
          <div>
            <Nav to="/list" isExact={false} label="文章列表" />
            <Nav to="/about" isExact={false} label="關於" />
            {user && <Nav to="/post" isExact={true} label="發布文章" />}
            {getApi && !user && <Nav to="/login" isExact={true} label="登入" />}
            {getApi && !user && (
              <Nav to="/register" isExact={true} label="註冊" />
            )}
            {user && (
              <span onClick={handleLogout}>
                <ButtonLink isActive={false} content="登出" />
              </span>
            )}
          </div>
        </Container>
      </Wrapper>
    </HeaderWrapper>
  );
}
