import { useAuth } from "hooks/useAuth";
import { Button, Container, Text } from "./UserMenu.styled";
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/authOperations";



export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container >
      <Text >Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
}