import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, ListContainer, Card, Title, Type, CocktailName, Glass, InfoContainer, Picture } from './cocktailList.styled';


export const CocktailList = () => {
    const[cocktails, setCocktails] = useState([]);
    const { letter } = useParams();
    console.log(letter)


    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  
   useEffect(() => { 
    async function fetchData() {
        const response = await fetch(url);
        const list = await response.json();
        if(list) {
            setCocktails(list.drinks)
            console.log(list.drinks)
        }
    }; 

    fetchData()
  }, [url]); 

    return(
        <Container>
            <Title>Cocktail Alphabet - Letter {letter.toUpperCase()}</Title>
            <ListContainer>
                {cocktails.map((item)=> (
                    <Card>
                        <Picture  src={item.strDrinkThumb}></Picture>
                        <InfoContainer>
                            <CocktailName key={item.idDrink}> {item.strDrink} </CocktailName>
                            <Type>Type: {item.strCategory} </Type>
                            <Glass>{item.strGlass}</Glass>
                        </InfoContainer>
                    </Card>
                ))
                }
            </ListContainer>
        </Container>
    )
}



   
    
   