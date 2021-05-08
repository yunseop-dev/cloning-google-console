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
const MainHeader = styled.header``;

const App: React.FC = () => {
  const menuList: MenuItemProps[] = [
    { isSelected: true, title: "메뉴 1", icon: MdAccountBalance },
    { isSelected: false, title: "메뉴 2", icon: MdAccountBox },
    { isSelected: false, title: "메뉴 3", icon: MdAccountCircle },
  ];
  return (
    <>
      <SideBar menuList={menuList} title="서비스명" />
      <main>
        <MainHeader>
          <HeaderTitle
            title="서비스명"
            suffix={
              <Button>
                <MdAdd /> 기능버튼
              </Button>
            }
          />
        </MainHeader>
        <section>내용</section>
      </main>
    </>
  );
};
export default App;
