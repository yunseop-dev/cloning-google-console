import React from "react";
import { Route, Switch } from "react-router-dom";
import { MdAdd, MdSupervisorAccount } from "react-icons/md";
import Button from "./Button";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";

const HeaderTitleWrapper = styled(HeaderTitle)`
  margin-left: 15rem;
  @media (max-width: 768px) {
    margin-left: auto;
    width: 50%;
    padding: initial;
  }
`;

const HeaderSwitcher = () => (
  <Switch>
    <Route exact path="/">
      <HeaderTitleWrapper title="Home" />
    </Route>
    <Route exact path="/News">
      <HeaderTitleWrapper
        title="News"
        suffix={
          <Button color="#3367d6">
            <MdAdd /> 추가
          </Button>
        }
      />
    </Route>
    <Route exact path="/users">
      <HeaderTitleWrapper title="Users" icon={MdSupervisorAccount} />
    </Route>
  </Switch>
);

export default HeaderSwitcher;
