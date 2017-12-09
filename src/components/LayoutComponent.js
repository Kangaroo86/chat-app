import React, { Component } from 'react';
// import io from 'socket.io-client';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events.js';
import LoginFormComponent from './LoginFormComponent';
import ChatContainer from './chats/ChatContainer';

const socketUrl = 'http://localhost:4000';

export default class LayoutComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  //Connect to and initialize the socket to state
  initSocket = () => {
    const socket = io(socketUrl); //i set it to 4000. why am i connected to 3000/
    socket.on('connect', () => {
      console.log('Am I connected wtf??');
    });
    this.setState({ socket: socket });
  };

  //sets the user obj to state
  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user: user });
  };

  //sets user state to null when logged out
  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    console.log('what are my state-----', this.state);
    const { socket, user } = this.state;
    return (
      <div className="container">
        {!user
          ? <LoginFormComponent socket={socket} setUser={this.setUser} />
          : <ChatContainer socket={socket} user={user} logout={this.logout} />}
      </div>
    );
  }
}
