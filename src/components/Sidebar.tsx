import React from "react";
import { MdEventNote } from "react-icons/md";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import MenuItem, { Menu, Props as MenuItemProps } from "./MenuItem";

interface Props {
  menuList: MenuItemProps[];
  title: string;
}

const StyledAside = styled.aside`
  width: 15rem;
  height: 100vh;
  float: left;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 50%;
    height: auto;
    .menu {
      float: none;
      display: none;
    }
  }
`;

const SideBar = ({ menuList, title }: Props) => {
  return (
    <StyledAside>
      <HeaderTitle icon={MdEventNote} title={title} />
      <Menu className="menu">
        {menuList.map((menu) => (
          <MenuItem
            isSelected={menu.isSelected}
            title={menu.title}
            icon={menu.icon}
          />
        ))}
      </Menu>
    </StyledAside>
  );
};

export default SideBar;
