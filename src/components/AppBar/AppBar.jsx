import Navigation from "components/Navigation/Navigation";
import { Header } from "./AppBar.styled";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";


export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}