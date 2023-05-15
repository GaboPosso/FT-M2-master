import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: true
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
  }
  render() {
    return (
      <div>
      <button onClick = {this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick = {this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        <Counter/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))