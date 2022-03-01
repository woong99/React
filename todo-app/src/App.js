import { useState, useRef, useCallback, useEffect } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import { firestore } from './firebase';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    firestore
      .collection('test')
      .orderBy('timestamp', 'asc')
      .onSnapshot((data) => {
        setTodos(
          data.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
            checked: doc.data().checked,
          })),
        );
      });
  }, []);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: Math.floor(Math.random() * 100),
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      firestore
        .collection('test')
        .doc(id)
        .delete()
        .then(() => {
          setTodos(todos.filter((todo) => todo.id !== id));
        });
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      const index = todos.findIndex((i) => i.id === id);
      // firestore
      //   .collection('test')
      //   .doc(id)
      //   .set({

      //   })
      console.log(todos[index]);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
