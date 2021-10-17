import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, ListContainer, Card, Title, Type, CocktailName, Glass, InfoContainer, Picture } from './cocktailList.styled';
import { getCocktailsByLetter, getCocktails } from "../../store/cocktailSlice";

export const CocktailList = () => {
    const [result, setResult] = useState([]);
    const { letter } = useParams();
    const drinks = useSelector(getCocktails);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getCocktailsByLetter(letter));
    }, [letter]);

    useEffect(() => { 
        setResult(drinks);
    }, [drinks]);

    return(
        <Container>
            <Title>Cocktails Starting on Letter {letter.toUpperCase()}</Title>
            <ListContainer>
                {result.map((item)=> (
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



   
    
   