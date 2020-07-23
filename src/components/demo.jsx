import React, { Component } from "react";
import axios from "axios";
import userData from "../users.json";

class demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("users data", userData.members);
    if (userData.members) {
      this.setState({
        users: userData.members,
      });
    }
  }

  displayUserData = (obj) => {
    // console.log('obj', obj);
    for (const key in obj) {
      console.log("obj", key);
      // return(
      //     <>
      // <td>{key}</td>
      // <td>{obj[key]}</td>
      // </>
      // );
    }
  };

  render() {
    let userdata = Object.entries(this.state.users);
    return (
      <>
        <table>
          {this.state.users.map((data) => (
            <tr>{this.displayUserData(data)}</tr>
          ))}
        </table>
      </>
    );
  }
}

export default demo;
