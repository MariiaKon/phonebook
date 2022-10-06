import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { RiUserLine } from 'react-icons/ri';
import { Header, Login, Navlink } from './Usermenu.styled';
import { Button } from 'components/Button/Button';
import { Icon } from 'views/commonCss.styled';
import authOperations from 'redux/auth/auth-operations.js';

export default function Usermenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.name);

  return (
    <>
      <Header>
        {isLoggedIn ? (
          <>
            <nav className="navbox">
              <Navlink to="/">Home</Navlink>
              <Navlink to="/contacts">Contacts</Navlink>
            </nav>

            <div className="navbox">
              <Login>
                Welcome,
                <span style={{ textTransform: 'capitalize' }}>{username}</span>
                <Icon>
                  <RiUserLine />
                </Icon>
              </Login>
              <Button
                type="button"
                content="Log Out"
                className="btn"
                onClick={() => {
                  dispatch(authOperations.logout());
                }}
              ></Button>
            </div>
          </>
        ) : (
          <div className="navbox">
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
          </div>
        )}
      </Header>

      <Outlet />
    </>
  );
}
