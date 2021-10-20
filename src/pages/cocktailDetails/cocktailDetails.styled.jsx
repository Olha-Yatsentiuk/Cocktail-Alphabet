import styled from 'styled-components';

export const Container = styled.div`
    background-color: #008fb3;
    display: flex;
    justify-content: center;
    `;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: center;
    border: 2px solid white;
    border-radius: 10px;
    overflow: hidden;
   `;

export const Infowrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 50%;
   justify-content: center;
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

export const Instruction = styled.div`
    text-align: center;
    font-size: 20px;
    color: #333333;
    padding-top: 10px;
`;
export const Picture = styled.img`
    border-radius: 50%;
    width: 50%;
    height: 100%;
   
    `;