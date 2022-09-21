import React, { FC } from "react";
import styled from "styled-components";

interface HeaderProps {}

const HeaderWrapper = styled.div`
  background-color: blue;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Title = styled.h1``;
const Header: FC<HeaderProps> = () => (
  <HeaderWrapper>
    <Title>Project Management Board</Title>
  </HeaderWrapper>
);

export default Header;
