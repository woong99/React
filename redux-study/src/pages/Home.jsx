import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate('./todos');
            }}
          >
            Todos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('./users');
            }}
          >
            Users
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
<h1>Home</h1>;
