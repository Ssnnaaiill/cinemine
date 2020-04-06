import React, { Component } from "react";
import GlobalStyle from "./components/GlobalStyle";
import { Router } from "./components/Router";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
