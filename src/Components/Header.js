import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0px 20px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10000;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Items = styled.li`
  margin-right: 5px;
  width: 50px;
  height: 60px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s;
`;

const SLink = styled(Link)`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;
const Header = (props) => {
  const {
    location: { pathname },
  } = props;
  return (
    <SHeader>
      <List>
        <Items current={pathname === "/"}>
          <SLink to="/">Movies</SLink>
        </Items>
        <Items current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Items>
        <Items current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Items>
      </List>
    </SHeader>
  );
};

export default withRouter(Header);
