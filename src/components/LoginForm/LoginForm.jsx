import { Text, Button, Form, Input, Label, LinkSection } from "./LoginForm.styled";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from "redux/auth/authOperations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  
  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label >
          Email *
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label >
          Password *
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Log in</Button>
      </Form>

      <Text>Don't have an account? <LinkSection to="/register">Sign up</LinkSection></Text> 
    </div>
  );
}