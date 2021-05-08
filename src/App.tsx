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
    { isSelected: true, title: "메뉴 1", icon: MdAccountBalance },
    { isSelected: false, title: "메뉴 2", icon: MdAccountBox },
    { isSelected: false, title: "메뉴 3", icon: MdAccountCircle },
  ];
  return (
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
      <Section>Hello</Section>
    </main>
  );
};
export default App;
