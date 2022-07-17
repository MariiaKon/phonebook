import {
  Container,
  SecondaryTitle,
  Overlay,
} from 'views/Contacts/ContactsView.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Button } from 'components/Button/Button';
import { Label, Input } from 'components/Forms/Form.styled';
import { FiUserPlus, FiAtSign, FiUnlock } from 'react-icons/fi';
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
                <FiUserPlus size={'24px'} />
                <Input
                  name="name"
                  type={'text'}
                  placeholder={'Enter name'}
                  required
                  autoComplete="off"
                ></Input>
              </Label>
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
