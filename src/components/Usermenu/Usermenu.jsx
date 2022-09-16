import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { RiUserLine } from 'react-icons/ri';
import { Header, Login } from './Usermenu.styled';
import { Button } from 'components/Button/Button';
import { Icon } from 'views/commonCss.styled';
import authOperations from 'redux/auth/auth-operations.js';
import { Link } from 'react-router-dom';

export default function Usermenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.user.name);

  return (
    <>
      <Header>
        {isLoggedIn ? (
          <>
            <Link
              to="/contacts"
              style={{ fontWeight: '500', color: '#fadccd' }}
            >
              Contacts
            </Link>
            <div>
              <Login>
                Welcome,
                <span style={{ textTransform: 'capitalize' }}>{name}</span>
                <Icon
                  style={{
                    background: '#fadccd',
                    color: '#964628',
                  }}
                >
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
