import React, { Component } from 'react';
import Desk from './components/Desk';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 1, name: 'codelawer', department: 'Manager' },
        { id: 2, name: 'secondman', department: 'Technic' },
        { id: 3, name: 'Third', department: 'Bureau' },
      ],
    };
  }
  render() {
    const spread = prop => {
      const newList = [...this.state.list, prop];
      this.setState({
        list: newList,
      });
    };
    return (
      <div>
        <Desk list={this.state.list} func={spread} />
      </div>
    );
  }
}
