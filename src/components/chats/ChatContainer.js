import React, { Component } from 'react';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
      activeChat: null
    };
  }

  setActiveChat = activeChat => {
    this.setState({ activeChat: activeChat });
  };

  render() {
    const { user, logout } = this.props;
    let { activeChat, chats } = this.state;
    return (
      <div className="container">
        <SideBar
          logout={logout}
          chats={chats}
          user={user}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat}
        />
      </div>
    );
  }
}
