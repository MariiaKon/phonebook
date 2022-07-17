import {
  Overlay,
  Container,
  SecondaryTitle,
} from 'views/Contacts/ContactsView.styled';

export function Loader() {
  return (
    <Overlay>
      <Container>
        <SecondaryTitle>LOADING...</SecondaryTitle>
      </Container>
    </Overlay>
  );
}
