import { Component } from "react";

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state = {
    name: "",
    user: undefined,
  };

  //with class based components always use arrow functions
  //to handle "this" weirdness
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {this.state.user && this.state.user}
          {this.state.name && this.state.name}
        </div>
      </div>
    );
  }
}
