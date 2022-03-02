import { useState, useRef, useCallback, useEffect } from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import TodoTemplate from '../components/TodoTemplate';
import { firestore } from '../firebase';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const uid = location.state.uid;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    firestore
      .collection(uid)
      .orderBy('timestamp', 'asc')
      .onSnapshot((data) => {
        setTodos(
          data.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
            checked: doc.data().checked,
            timestamp: doc.data().timestamp,
          })),
        );
      });
  }, []);

  const onInsert = useCallback(
    (text, timestamp) => {
      const todo = {
        id: Math.floor(Math.random() * 100),
        text,
        checked: false,
        timestamp,
      };
      setTodos(todos.concat(todo));
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      firestore
        .collection(uid)
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
      firestore.collection(uid).doc(id).set({
        text: todos[index].text,
        timestamp: todos[index].timestamp,
        checked: !todos[index].checked,
      });
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
      <TodoInsert onInsert={onInsert} uid={uid} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
