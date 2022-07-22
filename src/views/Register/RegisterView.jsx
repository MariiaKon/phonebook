import {
  Container,
  SecondaryTitle,
  Overlay,
} from 'views/Contacts/ContactsView.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Button } from 'components/Button/Button';
import { Label, Input } from 'components/Forms/Form.styled';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();
  const registerContactHandler = async user => {
    try {
      await console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Container>
        <SecondaryTitle>Sign Up</SecondaryTitle>
        <FormElement
          onSubmit={e => {
            e.preventDefault();
            registerContactHandler({
              name: e.target.name.value,
              email: e.target.email.value,
              password: e.target.password.value,
            });
            navigate('/contacts');
          }}
          btnContent={'Sign Up'}
          children={
            <>
              <Label>
                <Input
                  name="name"
                  type={'text'}
                  required
                  autoComplete="off"
                />
                <span>Enter name</span>
              </Label>
              <Label>
                <Input
                  name="email"
                  type={'email'}
                  required
                  autoComplete="off"
                />
                <span>Enter email</span>
              </Label>
              <Label>
                <Input
                  name="password"
                  type={'password'}
                  required
                  autoComplete="off"
                />
                <span>Enter password</span>
              </Label>
            </>
          }
        />
        <Button
          type="button"
          content="I have an account"
          className="btn"
          onClick={() => {
            navigate('/login');
          }}
        ></Button>
      </Container>
    </Overlay>
  );
}
