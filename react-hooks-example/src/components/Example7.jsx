import React, { useCallback, useMemo, useState } from 'react';

function sum(persons) {
  console.log('sum....');
  return persons.map((person) => person.age).reduce((l, r) => l + r);
}

const Example7 = () => {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'Mark', age: 39 },
    { name: 'Hanna', age: 28 },
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
};

export default Example7;
