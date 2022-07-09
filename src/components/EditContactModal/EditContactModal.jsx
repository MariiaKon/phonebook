import { Overlay } from './EditContactsModal.styled';
import { ContactForm } from 'components/Forms/ContactForm';

export function Modal() {
  return (
    <Overlay>
      <ContactForm btnText="Edit contact" />
    </Overlay>
  );
}
