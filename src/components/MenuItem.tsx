import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export interface Props {
  icon: IconType;
  title: string;
  to: string;
}

const StyledList = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  text-decoration: none;
  color: inherit;
  .icon {
    width: 2rem;
  }
  &.selected {
    background: rgba(161, 194, 250, 0.16);
    color: #3367d6;
  }
  &:hover {
    background: #efefef;
  }
`;

export const Menu = styled.ul`
  font-size: 1rem;
  margin: 0.5rem auto;
`;

const MenuItem = ({ icon: Icon, title, to }: Props) => (
  <li>
    <StyledList
      to={to}
      activeClassName="selected"
      isActive={(match) => Boolean(match?.isExact)}
    >
      <div className="icon">
        <Icon />
      </div>
      <span>{title}</span>
    </StyledList>
  </li>
);

export default MenuItem;
