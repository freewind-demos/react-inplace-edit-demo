import React, {Component} from 'react';

class Hello extends Component {

  render() {
    return <div>Hello world!</div>;
  }

  handleNewUsername(event) {
    this.setState({username: event.target.value});
  }
}

export default Hello;