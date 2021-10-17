import styled from 'styled-components';


export const Container = styled.div`
    background-color: #008fb3;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    `;

export const Card = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: center;
    border: 2px solid white;
    border-radius: 10px;
    overflow: hidden;
    transition: background-color 2s;
    text-decoration: none;
   `;

export const CocktailName = styled.h2`
    text-align: center;
    padding-top: 30px;
    color: black;
    `;

export const Type = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    `;
    
export const Glass = styled.div`
    text-align: center;
    font-size: 20px;
    color: #333333;
    padding-top: 10px;
 
`;
export const Picture = styled.img`
    border-radius: 50%;
    `;