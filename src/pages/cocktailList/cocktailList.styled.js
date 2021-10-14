import styled from 'styled-components'

export const Container = styled.div`
    background-color: #008fb3;
    `
export const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    padding-top: 30px;
    `
    
export const ListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    `
export const Card = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 400px;
    height: 200px;
    justify-content: center;
    border: 2px solid white;
    border-radius: 10px;
    overflow: hidden;
    transition: background-color 2s;

    &:hover {
        background-color: #33ffcc;     
    }
   `
export  const InfoContainer = styled.div`
    width: 100%;
    
`
export const CocktailName = styled.h2`
    text-align: center;
    padding-top: 30px;
    `

export  const Type = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    `
export  const Glass = styled.div`
    text-align: center;
    font-size: 20px;
    color: #333333;
    padding-top: 10px;
 
`
export  const Picture = styled.img`
    border-radius: 50%;
    `