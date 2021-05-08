import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

export interface Props {
  isSelected: boolean;
  icon: IconType;
  title: string;
}

const StyledList = styled.li`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
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

const MenuItem = ({ isSelected, icon: Icon, title }: Props) => (
  <StyledList className={isSelected ? "selected" : ""}>
    <div className="icon">
      <Icon />
    </div>
    <span>{title}</span>
  </StyledList>
);

export default MenuItem;
