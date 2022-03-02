import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { loginEmail, signupEmail } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const onChange = useCallback((e) => {
    console.log(e.target.type);
    if (e.target.type === 'email') setEmail(e.target.value);
    else setPassWord(e.target.value);
  }, []);

  const onSignUp = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    signupEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const onSignIn = (e) => {
    e.preventDefault();
    loginEmail(email, password).then((result) => {
      const uid = result.user.uid;
      navigate('./main', { state: { uid } });
    });
  };

  return (
    <div>
      <Link to="./main">Main</Link>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={onChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSignIn}>
            Sign In
          </Button>
          <Button variant="primary" type="submit" onClick={onSignUp}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
