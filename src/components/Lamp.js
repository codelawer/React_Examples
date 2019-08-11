import React, { Component } from 'react';

export default class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  turn = () => {
    this.setState({
      on: !this.state.on,
    });
  };
  render() {
    console.log(this, this.props);

    return (
      <div>
        <div style={{ backgroundColor: this.props.bg || 'red', width: '300px' }}>
          <p
            style={{
              height: '200px',
              width: '200px',
              backgroundColor: this.state.on === true ? 'yellow' : 'black',
              borderRadius: '50%',
            }}
          />
        </div>
        <button onClick={this.turn}>Turn</button>
      </div>
    );
  }
}
