import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, ListContainer, Card, Title, Type, CocktailName, Glass, InfoContainer, Picture, Message } from './cocktailList.styled';
import { getCocktailsByLetter, getCocktails } from "../../store/cocktailListSlice";

export const CocktailList = () => {
    const [result, setResult] = useState([]);
    const { letter } = useParams();
    const drinks = useSelector(getCocktails);
    const dispatch = useDispatch();

   
    const categories = new Set()
    const types = new Set()
    const glasses = new Set()

    drinks.forEach((item) => {
        categories.add(item.strCategory);
        types.add(item.strAlcoholic);
        glasses.add(item.strGlass);
    })
    
    const key = "strCategory"
    const chosenType = "Cocktail"

    const chosenDrinks = drinks.filter((item) => item[key] === chosenType)
    console.log(chosenDrinks)




    useEffect(() => { 
        dispatch(getCocktailsByLetter(letter));
    }, [letter, dispatch]);

    useEffect(() => { 
        setResult(drinks);
    }, [drinks]);

    return(
        <Container>
            <Title>Cocktails Starting on Letter {letter.toUpperCase()}</Title>
            <ListContainer>
                {result.length === 0 && <Message> Sorry, there are no cocktails begining with letter "U". Try some other letters. </Message> 
            }
                {result.map((item)=> (  
                    <Card key={item.idDrink} to={`/list/${letter}/${item.idDrink}`}> 
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



   
    
   