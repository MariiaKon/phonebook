import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, SecondaryTitle, Overlay } from 'views/commonCss.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Label, Input } from 'components/Forms/Form.styled';
import authOperations from 'redux/auth/auth-operations.js';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
  };

  return (
    <Overlay>
      <Container>
        <SecondaryTitle>Log In</SecondaryTitle>
        <FormElement
          onSubmit={submitHandler}
          btnContent={'Log In'}
          children={
            <>
              <Label>
                <Input
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  type={'email'}
                  required
                  autoComplete="off"
                />
                <span>Email</span>
              </Label>
              <Label>
                <Input
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type={'password'}
                  required
                  autoComplete="off"
                />
                <span>Password</span>
              </Label>
            </>
          }
        />
      </Container>
    </Overlay>
  );
}
