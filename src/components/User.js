import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log('user will unmount');
  }

  // this runs for every component destroyed, meaning three users
  // so for example when we conditionally render the users and then hide them

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
