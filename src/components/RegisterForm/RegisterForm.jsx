import { Button, Form, Input, Label, LinkSection, Text } from "./RegisterForm.styled";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from "redux/auth/authOperations";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
 
  return (
      <div>
        <Form autoComplete="off" onSubmit={handleSubmit}>

        <Label >
          Name *
          <Input
            type="name"
            name="name"
            value={name} 
            onChange={handleChange}
          />
        </Label>

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

        <Button type="submit">Sign up</Button>
        </Form>

        <Text>Already have an account? <LinkSection to="/register">Sign In</LinkSection></Text> 
      </div>
  );
}