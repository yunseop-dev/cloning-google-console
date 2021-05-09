import React from "react";
import styled from "styled-components";
import {
  MdAccountBalance,
  MdAccountBox,
  MdAccountCircle,
  MdAdd,
} from "react-icons/md";
import HeaderTitle from "./components/HeaderTitle";
import SideBar from "./components/Sidebar";
import Button from "./components/Button";
import { Props as MenuItemProps } from "./components/MenuItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";

const MainHeader = styled.header`
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: white;
  }
`;

const HeaderTitleWrapper = styled(HeaderTitle)`
  margin-left: 15rem;
  @media (max-width: 768px) {
    margin-left: auto;
    width: 50%;
    padding: initial;
  }
`;

const Section = styled.section`
  margin-left: 15rem;
  @media (max-width: 768px) {
    padding-top: 3rem;
    margin-left: auto;
  }
`;

const App: React.FC = () => {
  const menuList: MenuItemProps[] = [
    { title: "Home", icon: MdAccountBalance, to: "/" },
    { title: "About", icon: MdAccountBox, to: "/about" },
    { title: "Users", icon: MdAccountCircle, to: "/users" },
  ];
  return (
    <Router>
      <main>
        <MainHeader>
          <SideBar menuList={menuList} title="서비스명" />
          <HeaderTitleWrapper
            title="메뉴 1"
            suffix={
              <Button color="#3367d6">
                <MdAdd /> 기능버튼
              </Button>
            }
          />
        </MainHeader>
        <Section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </Section>
      </main>
    </Router>
  );
};
export default App;
