import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// i extended the component so i can use this.props

// in class components render does not receive props
// wee need to import component

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// so we just converted the functional component to a class based component

export default User;
