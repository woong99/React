import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

const Example3 = () => {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
};

export default Example3;
