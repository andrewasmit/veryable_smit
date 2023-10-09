// External Dependencies
import { useMemo, useState } from "react"
import { Typography } from "@mui/material"

// Internal Dependencies
import { CountriesProps } from "../Countries"
import { findRandomCountry } from "../../utils/findRandomCountry";

// Local Dependencies
import QuestionCard from './QuestionCard'

function Game({ data }:CountriesProps) {

  const [score, setScore] = useState(0)
  const potentialAnswers: any = [];

  for(let i =0; i<4; i++){
    const newCountry = findRandomCountry(data);
    if(!potentialAnswers.includes(newCountry)){
      potentialAnswers.push(newCountry)
    } else 
    i-=1;
  };

  const questionToDisplay = useMemo(()=>{
    return <QuestionCard answerData={potentialAnswers} score={score} setScore={setScore} />
  },[potentialAnswers, score])

  
  return (
    <>
      <Typography variant="h2" sx={{ textAlign:'center', backgroundColor: '#333366', color: '#ffff33', opacity: 0.85 }} >Score: {score}</Typography>
      { questionToDisplay }
    </>
  )
}

export default Game