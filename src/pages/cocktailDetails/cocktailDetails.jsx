/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Infowrapper, Type, CocktailName, Glass, Picture, Instruction } from "./cocktailDetails.styled";
import { getCocktailsByLetter, getCocktails } from "../../store/cocktailListSlice";

export const CocktailDetails = () => {
    const [result, setResult] = useState([]);
    const { letter, id } = useParams();
    const drinks = useSelector(getCocktails);
    const dispatch = useDispatch();
    const currentDrink = result.find((drink) => drink.idDrink === id)
    
    useEffect(() => {   
        drinks.length === 0 && dispatch(getCocktailsByLetter(letter));
    }, [letter, drinks.length]);

    useEffect(() => { 
        setResult(drinks);
    }, [drinks]);

return(
        <Container>
            <Card>
                <Picture  src={currentDrink?.strDrinkThumb}></Picture>
               <Infowrapper>
                    <CocktailName>{currentDrink?.strDrink}</CocktailName>
                    <Type>Type: {currentDrink?.strCategory} <br/>
                    {currentDrink?.strAlcoholic}</Type>
                    
                    <Glass>{currentDrink?.strGlass}</Glass>
                    <Instruction>{currentDrink?.strInstructions}</Instruction>
               </Infowrapper>
            </Card>       
      </Container>
   )
 }

