import React from "react";
import "./App.css";
import MainUser from "./components/MainUser";
import Followers from "./components/Followers";
import axios from "axios";
import "./App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainUser: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/crutledgedev").then(response => {
      this.setState({ mainUser: response.data });
      console.log(this.state.mainUser);
    });

    axios
      .get("https://api.github.com/users/crutledgedev/followers")
      .then(response => {
        this.setState({ followers: response.data });
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <MainUser mainUser={this.state.mainUser} />
        <h2>
          {this.state.mainUser.name}'s Followers
        </h2>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}
export default App;