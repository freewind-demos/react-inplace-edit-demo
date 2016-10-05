import React, {Component} from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Double click me to edit!',
      editing: false
    }
  }

  render() {
    const {editing, content} = this.state;
    return <div>
      { editing
        ? <input type="text" defaultValue={content}
                 onKeyPress={this._onEnter.bind(this)}/>
        : <span onDoubleClick={() => this.setState({editing: true})}>{content}</span>}
    </div>;
  }

  _onEnter(event) {
    if (event.charCode === 13) {
      const newContent = event.target.value;
      this.setState({
        content: newContent,
        editing: false
      })
    }
  }

}

export default Hello;