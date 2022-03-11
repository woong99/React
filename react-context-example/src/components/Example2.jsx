import React, { Component } from 'react';
import PersonContext from '../contexts/PersonContext';

class Example2 extends Component {
  static contextType = PersonContext;
  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default Example2;
