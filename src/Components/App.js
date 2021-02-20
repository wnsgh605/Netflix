import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <div>
        <Router />
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
