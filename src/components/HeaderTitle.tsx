import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  icon?: IconType;
  title: string;
  suffix?: JSX.Element;
}

const StyledTitle = styled.h5`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  font-size: 1.5rem;
  min-height: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .icon {
    width: 2rem;
  }
`;

const HeaderTitle = ({ icon: Icon, title, suffix, ...rest }: Props) => {
  return (
    <StyledTitle {...rest}>
      {Icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
      <span>{title}</span>
      {suffix}
    </StyledTitle>
  );
};

export default HeaderTitle;
