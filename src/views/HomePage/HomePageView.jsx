import { useSelector } from 'react-redux';
import { Container, Overlay, SecondaryTitle } from 'views/commonCss.styled';
import { BiWinkSmile } from 'react-icons/bi';

export function HomePage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.name);

  return (
    <Overlay>
      <Container>
        <SecondaryTitle>
          Hello
          {isLoggedIn ? (
            <span style={{ textTransform: 'capitalize' }}>, {username}</span>
          ) : (
            <BiWinkSmile
              style={{
                margin: '0 0 -5px 10px',
                height: '1.25em',
                width: '1.25em',
              }}
            />
          )}
          <br />
          I'm your Phonebook App
        </SecondaryTitle>
      </Container>
    </Overlay>
  );
}
