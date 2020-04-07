import React, { Component } from "react";
import { Router } from "./components/Router";
import GlobalStyle from "./components/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface IProps {
  data: any;
}

class App extends Component<IProps, any> {
  render() {
    const {
      data: {
        auth: { isLoggedIn },
      },
    } = this.props;
    return (
      <>
        <Router isLoggedIn={isLoggedIn} />
        <GlobalStyle />
        <ToastContainer
          draggable={true}
          position={"top-left"}
          autoClose={5000}
          hideProgressBar={true}
          pauseOnHover={true}
        />
      </>
    );
  }
}

export default App;
