// External Dependencies
import { useMemo } from "react"
import { Typography } from "@mui/material"

// Internal Dependencies
import { CountriesProps } from "../Countries"

// Local Dependencies
import QuestionCard from './QuestionCard'
import { findRandomCountry } from "../../utils/findRandomCountry";


function Game({ data }:CountriesProps) {

  // const randomIdx = Math.floor(Math.random() * data.countries?.length);
  // const randomCountry = data.countries[randomIdx];
  const randomWrongCountries = [];
  const correctAnswer = findRandomCountry(data);

  for(let i =0; i<3; i++){
    const wrongAnswer = findRandomCountry(data);
    if(wrongAnswer.name !== correctAnswer.name){
      randomWrongCountries.push(wrongAnswer)
    }
  };

  const questionToDisplay = useMemo(()=>{
    return <QuestionCard correctAnswerData={correctAnswer} wrongAnswerData={randomWrongCountries}/>
  },[correctAnswer, randomWrongCountries])

  
  return (
    <>
      <Typography variant="h2" sx={{ textAlign:'center',color: '#fff' }} >This is the Game Page</Typography>
      { questionToDisplay }
    </>
  )
}

export default Game