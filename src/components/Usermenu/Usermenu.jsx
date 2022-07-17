import { useNavigate } from 'react-router-dom';
import { Header, Login } from './Usermenu.styled';
import { Button } from 'components/Button/Button';

const isLoggedIn = true;

export const Usermenu = () => {
  const navigate = useNavigate();

  return (
    <Header>
      {isLoggedIn ? (
        <>
          <Login>user@email.com</Login>
          <Button
            type="button"
            content="Log Out"
            className="btn"
            onClick={() => {
              navigate('/register');
            }}
          ></Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            content="Sign Up"
            className="btn"
            onClick={() => {
              navigate('/register');
            }}
          ></Button>
          <Button
            type="button"
            content="Log In"
            className="btn"
            onClick={() => {
              navigate('/login');
            }}
          ></Button>
        </>
      )}
    </Header>
  );
};
