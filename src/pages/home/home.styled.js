import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-image: url("../images/cocktails.jpg"); 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    `;

export const Title = styled.h1`
    color: white;
    font-size: 3em;
    text-align: center;
    padding-top: 30px;
    `;

export const Alphabet = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    `;

export const Letter = styled(Link)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 2px solid grey;
    border-radius: 10%;
    font-size: 50px;
    color:  #ff0000;
    font-weight: bold;
    text-shadow: 2px 2px 2px white;
    background-color: white;
    opacity: 0.5;
    text-decoration: none;
    transition: opacity 1s, transform 1s;

    &:hover {
        opacity: 0.8;
        transform: scale(1.1, 1.1);
    }
    }
    `;
