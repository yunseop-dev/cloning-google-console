import React from "react";
import styled from "styled-components";
import {
  MdAccountBalance,
  MdAccountBox,
  MdAccountCircle,
} from "react-icons/md";
import SideBar from "./components/Sidebar";
import { Props as MenuItemProps } from "./components/MenuItem";
import { BrowserRouter as Router } from "react-router-dom";
import PageSwitcher from "./components/PageSwitcher";
import HeaderSwitcher from "./components/HeaderSwitcher";

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
    { title: "News", icon: MdAccountBox, to: "/News" },
    { title: "Users", icon: MdAccountCircle, to: "/users" },
  ];

  return (
    <Router>
      <main>
        <MainHeader>
          <SideBar menuList={menuList} title="Kubernetes" />
          <HeaderSwitcher />
        </MainHeader>
        <Section>
          <PageSwitcher />
        </Section>
      </main>
    </Router>
  );
};

export default App;
