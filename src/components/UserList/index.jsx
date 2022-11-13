import React, { Component } from "react";
import User from "../User";

class UserList extends Component {
  state = {
    users: [
      {
        id: 1,
        firstName: "Anton",
        lastName: "Antonov",
        isLike: false,
        likes: 0,
      },
      { id: 2, firstName: "Petr", lastName: "Petrov", isLike: false, likes: 0 },
      { id: 3, firstName: "Test", lastName: "Testov", isLike: false, likes: 0 },
    ],
  };

  liked = (idUser) => {
    this.setState({
      users: this.state.users.map((user) => {
        return {
          ...user,
          isLike: idUser === user.id ? true : user.isLike,
          likes: idUser === user.id ? user.likes + 1 : user.likes,
        };
      }),
    });
  };

  removeUser = (idUser) => {
    this.setState({
      users: this.state.users.filter((user) => idUser !== user.id),
    });
  };

  render() {
    const { users } = this.state;
    const usersList = users.map((user) => (
      <li key={user.id}>
        <User
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          likes={user.likes}
          liked={this.liked}
          removeUser={this.removeUser}
          isLike={user.isLike}
        />
      </li>
    ));
    return (
      <section>
        <h1>List:</h1>
        <ul>{usersList}</ul>
      </section>
    );
  }
}

export default UserList;
