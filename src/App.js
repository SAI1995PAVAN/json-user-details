import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search/Search.js";
import Userstatus from "./components/Userstatus/Userstatus.js";
import Message from "./components/Message/Message.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userdata: [],
      time: "",
      searcharea: "",
      message: "",
      result: "",
      msgdata: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((users) => this.setState({ userdata: users }));
  }

  // UserNames = () => {
  //   const Unames = this.state.userdata.map((user) => {
  //     return user.name;
  //   });
  //   this.setState({ result: Unames });
  // };

  searchValue = (e) => {
    this.setState({ searcharea: e.target.value });
  };

  handlemessage = (value) => {
    // const Unames = this.state.userdata.map((user) => {
    //   return user.name;
    // });
    this.setState({ result: value });
    this.setState({
      message: "clicked at",
      time: new Date().toLocaleTimeString(),
    });
    this.setState({
      msgdata: [
        ...this.state.msgdata,
        `${this.state.result} ${this.state.message} ${this.state.time}`,
      ],
      // msgdata: this.state.msgdata.unshift(
      //   `${this.state.result} ${this.state.message} ${this.state.time}`
      // ),
    });
  };

  render() {
    const filterUsers = this.state.userdata.filter((user) => {
      return user.name.toLowerCase().match(this.state.searcharea.toLowerCase());
    });

    return (
      <div>
        <Search
          searchValue={this.searchValue}
          searcharea={this.state.searcharea}
        />
        <div className="page">
          <div className="userinfo">
            <Userstatus
              userdata={filterUsers}
              handlemessage={this.handlemessage}
              message={this.state.message}
              time={this.state.time}
            />
          </div>
          <div className="message">
            <Message
              message={this.state.message}
              time={this.state.time}
              result={this.state.result}
              msgdata={this.state.msgdata}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
