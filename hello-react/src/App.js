// App.js

import { firestore } from './firebase';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const test = firestore.collection('test');
    test
      .doc('friend')
      .get()
      .then((doc) => {
        console.log(doc.data());
        console.log(doc.id);
      });
  });
  const onClickHandler = (e) => {
    e.preventDefault();

    firestore
      .collection('test')
      .doc('friend')
      .set({ couunt: 2 })
      .then((doc) => {
        console.log(doc.id);
      });
  };

  return (
    <div>
      firebase 확인해보기!
      <button onClick={onClickHandler}>추가</button>
    </div>
  );
};

export default App;
