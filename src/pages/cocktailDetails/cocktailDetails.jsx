import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Type, CocktailName, Glass, Picture } from "./cocktailDetails.styled";
import { getDrinkById, getDrink } from "../../store/drinkSlice";

export const CocktailDetails = () => {
    const [result, setResult] = useState([]);
    const { idDrink } = useParams();
    const drink = useSelector(getDrink);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getDrinkById(idDrink));
    }, [idDrink, dispatch]);

    useEffect(() => { 
        setResult(drink);
    }, [drink]);

    return(
        <Container>
            <Card>
                <Picture  src={result.strDrinkThumb}></Picture>
                <CocktailName>{result.strDrink}</CocktailName>
                <Type>Type: {result.strCategory}</Type>
                <Glass>{result.strGlass}</Glass>
            </Card>       
      </Container>
    )
}
