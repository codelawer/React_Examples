import React, { Component } from 'react';

export default class Desk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.state);
  }
  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.func(this.state);
  };
  handleChange = e => {
    // console.log(e);
    // console.log([e]);
    // console.log(e.target);
    // console.log([e.target]);
    // console.log(e.target.id);
    // console.log([e.target.id]);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const output = this.props.list.map(item => (
      <div key={item.id}>
        <h1> Name: {item.name} </h1>
        <h2>Department: {item.department}</h2>
        <hr />
      </div>
    ));
    return (
      <div>
        <form type="submit" onSubmit={this.submitForm}>
          <label htmlFor="id">Id </label>
          <input id="id" type="text" onChange={this.handleChange} />
          <label htmlFor="name">Name </label>
          <input id="name" type="text" onChange={this.handleChange} />
          <label htmlFor="department">Department </label>
          <input id="department" type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <div>{output}</div>
        {/* <h1>{this.state.name === '' ? `DefaultName` : this.state.name}</h1> */}
      </div>
    );
  }
}
