import React, { useState } from 'react';
import { Container, FormContainer, Error, Base, Title, Text, Linker, Input, Submit,} from '../signUp/signUp.styled';
import { useHistory } from 'react-router-dom';
import getFirebase from '../../firebase/firebaseConfig';
import * as ROUTES from '../../routes/routes';

export const SignIn = () => {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';



  const firebaseInstance = getFirebase();

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(emailAddress, password);
        console.log("user", user);
        history.push(ROUTES.HOME);        
      }
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };
  
  return (
    <Container>
      <FormContainer>
        <Title>Sign In</Title>
        {error && <Error>{error}</Error>}

        <Base onSubmit={handleSignin} method="POST">
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
              Sign In
          </Submit>
          </Base>
          <Text>
              New to Cocktail-Alphabet? <Linker to="/signup">Sign up now.</Linker>
          </Text>
        </FormContainer>
      </Container>
  );
}
