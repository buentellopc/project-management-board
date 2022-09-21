import React from "react";
import Header from "../components/Header/Header";
import Board from "./Board";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        <Header />
        <Board />
      </AppWrapper>
    </>
  );
};

export default App;
