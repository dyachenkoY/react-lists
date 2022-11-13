import React, { Component } from "react";

class User extends Component {

  render() {
    const { id, firstName, lastName, likes, liked, isLike, removeUser } = this.props;
    return (
      <div>
        <p>
          {firstName} {lastName} Likes: {likes}
        </p>
        <button onClick={() => liked(id)} disabled={isLike}>Like</button>
        <button onClick={() => removeUser(id)}>Delete user</button>
      </div>
    );
  }
}

export default User;
