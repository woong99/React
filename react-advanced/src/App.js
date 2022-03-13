import logo from './logo.svg';
import './App.css';
import React from 'react';

class Foo extends React.Component {
  componentDidMount() {
    console.log('Foo componentDidMount');
  }
  componentWillUnmount() {
    console.log('Foo componentWiiiUnMount');
  }
  render() {
    return <p>Foo</p>;
  }
}

class App extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    if (this.state.count % 2 === 0) {
      return <div className="before" title="stuff" />;
    }
    return <div className="after" title="stuff" />;
  }
}

export default App;
