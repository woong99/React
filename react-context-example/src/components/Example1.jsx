import React from 'react';
import PersonContext from '../contexts/PersonContext';

const Example1 = () => {
  return (
    <PersonContext.Consumer>
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
};

export default Example1;
