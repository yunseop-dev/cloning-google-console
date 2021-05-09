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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 15rem;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    position: relative;
    width: 50%;
    height: auto;
    &:hover {
      .menu {
        display: block;
        position: absolute;
        background: white;
        width: 50vw;
      }
    }
    .menu {
      display: none;
    }
  }
`;

const SideBar = ({ menuList, title }: Props) => {
  return (
    <StyledAside>
      <HeaderTitle icon={MdEventNote} title={title} />
      <Menu className="menu">
        {menuList.map((menu, index) => (
          <MenuItem
            key={index}
            title={menu.title}
            icon={menu.icon}
            to={menu.to}
          />
        ))}
      </Menu>
    </StyledAside>
  );
};

export default SideBar;
