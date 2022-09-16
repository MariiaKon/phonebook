import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, SecondaryTitle, Overlay } from 'views/commonCss.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Button } from 'components/Button/Button';
import { Label, Input } from 'components/Forms/Form.styled';
import authOperations from 'redux/auth/auth-operations.js';

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <Overlay>
      <Container>
        <SecondaryTitle>Sign Up</SecondaryTitle>
        <FormElement
          onSubmit={submitHandler}
          btnContent={'Sign Up'}
          children={
            <>
              <Label>
                <Input
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  name="name"
                  type={'text'}
                  required
                  autoComplete="off"
                />
                <span>Enter name</span>
              </Label>
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
                <span>Enter email</span>
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
