import {
  Container,
  SecondaryTitle,
  Overlay,
} from 'views/Contacts/ContactsView.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Label, Input } from 'components/Forms/Form.styled';
import { useNavigate } from 'react-router-dom';
import { FiAtSign, FiUnlock } from 'react-icons/fi';

export default function LoginForm() {
  const navigate = useNavigate();
  const LoginFormHandler = async user => {
    try {
      await console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Container>
        <SecondaryTitle>Log In</SecondaryTitle>
        <FormElement
          onSubmit={e => {
            e.preventDefault();
            LoginFormHandler({
              email: e.target.email.value,
              password: e.target.password.value,
            });
            navigate('/contacts');
          }}
          btnContent={'Log In'}
          children={
            <>
              <Label>
                <FiAtSign size={'24px'} />
                <Input
                  name="email"
                  type={'email'}
                  placeholder={'Enter email'}
                  required
                  autoComplete="off"
                ></Input>
              </Label>
              <Label>
                <FiUnlock size={'24px'} />
                <Input
                  name="password"
                  type={'password'}
                  placeholder={'Enter password'}
                  required
                  autoComplete="off"
                ></Input>
              </Label>
            </>
          }
        />
      </Container>
    </Overlay>
  );
}
