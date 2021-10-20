import React, { useState } from 'react';
import { Container, FormContainer, Error, Base, Title, Text, Linker, Input, Submit,} from './signUp.styled';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';
import getFirebase from '../../firebase/firebaseConfig';

export const SignUp = () => {
  const firebaseInstance = getFirebase();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        console.log("user", user);
        history.push(ROUTES.HOME);
      }
    } catch (error) {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        {error && <Error>{error}</Error>}

        <Base onSubmit={handleSignup} method="POST">
          <Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
          <Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
          <Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          <Submit disabled={isInvalid} type="submit">
              Sign Up
          </Submit>
          </Base>
          <Text>
              Already a user? <Linker to="/signin">Sign in now.</Linker>
          </Text>
        </FormContainer>
      </Container>
  );
}
