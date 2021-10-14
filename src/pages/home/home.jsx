import React from 'react';
import { Container, Title, Alphabet, Letter } from './home.styled';
import { getAlphabet } from '../../utils'

export const Home = () => {
    const alphabet = getAlphabet();
   
    return(
        <Container>
            <Title>Cocktail Alphabet</Title>
            <Alphabet> 
                {alphabet.map((letter)=> (
                    <Letter key={letter} to={`/list/${letter}`}> {letter.toUpperCase()} </Letter>
                 ))
                 }
            </Alphabet>
        </Container>

    )
}

