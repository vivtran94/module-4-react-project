import React from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import AnimeIndex from "./components/AnimeIndex";

class App extends React.Component {
  state = {
    selectedPage: "login",
    loggedInUser: null
  };

  selectPage = page => {
    this.setState({
      selectedPage: page
    });
  };

  setLoggedInUser = user => {
    console.log("running setloggedinuser");
    this.setState({
      loggedInUser: user,
      selectedPage: "myTickets"
    });
  };

  render() {
    return (
      <div className="App">
        <LoginPage setLoggedInUser={this.setLoggedInUser} />
        <AnimeIndex />
      </div>
    );
  }
}

export default App;
