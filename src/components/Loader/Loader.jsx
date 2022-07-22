import { Overlay, Container, SecondaryTitle } from 'views/commonCss.styled';

export function Loader() {
  return (
    <Overlay>
      <Container>
        <SecondaryTitle>LOADING...</SecondaryTitle>
      </Container>
    </Overlay>
  );
}
