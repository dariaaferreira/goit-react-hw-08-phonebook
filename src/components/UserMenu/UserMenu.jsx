import { useAuth } from "hooks/useAuth";
import { Button, Container, Text } from "./UserMenu.styled";
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/authOperations";
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Container >
      <Text >Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}