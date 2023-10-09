// External Dependencies
import { useMemo, useState } from "react"
import { Typography } from "@mui/material"

// Internal Dependencies
import { CountriesProps } from "../Countries"

// Local Dependencies
import QuestionCard from './QuestionCard'
import { findRandomCountry } from "../../utils/findRandomCountry";


function Game({ data }:CountriesProps) {

  const [score, setScore] = useState(0)
  const correctAnswer = findRandomCountry(data);
  const randomWrongCountries = [];

  for(let i =0; i<3; i++){
    const wrongAnswer = findRandomCountry(data);
    if(wrongAnswer.name !== correctAnswer.name){
      randomWrongCountries.push(wrongAnswer)
    } else 
    i-=1;
  };

  const questionToDisplay = useMemo(()=>{
    return <QuestionCard correctAnswerData={correctAnswer} wrongAnswerData={randomWrongCountries} score={score} setScore={setScore} />
  },[correctAnswer, randomWrongCountries, score])

  
  return (
    <>
      <Typography variant="h2" sx={{ textAlign:'center', backgroundColor: '#333366', color: '#ffff33', opacity: 0.85 }} >Score: {score}</Typography>
      { questionToDisplay }
    </>
  )
}

export default Game