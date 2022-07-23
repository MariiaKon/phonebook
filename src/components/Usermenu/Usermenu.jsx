import { useNavigate, Outlet } from 'react-router-dom';
import { RiUserLine } from 'react-icons/ri';
import { Header, Login } from './Usermenu.styled';
import { Button } from 'components/Button/Button';
import { Icon } from 'views/commonCss.styled';
import { logoutUser } from 'redux/auth/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Usermenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const email = useSelector(state => state.user.email);

  return (
    <>
      <Header>
        {isLoggedIn ? (
          <>
            <Login>
              <Icon
                style={{
                  background: '#fadccd',
                  color: '#964628',
                }}
              >
                <RiUserLine />
              </Icon>
              {email}
            </Login>
            <Button
              type="button"
              content="Log Out"
              className="btn"
              onClick={() => {
                dispatch(logoutUser());
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

      <Outlet />
    </>
  );
}
