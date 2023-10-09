// External Dependencies
import { useMemo } from "react"
import { Typography } from "@mui/material"

// Internal Dependencies
import { CountriesProps } from "../Countries"

// Local Dependencies
import QuestionCard from './QuestionCard'


function Game({ data }:CountriesProps) {

  const randomIdx = Math.floor(Math.random() * data.countries?.length);
  const randomCountry = data.countries[randomIdx];
  console.log("RANDOM: ", randomCountry);

  const questionToDisplay = useMemo(()=>{
    return <QuestionCard data={randomCountry} />
  },[randomCountry])

  
  return (
    <>
      <Typography variant="h2" sx={{ textAlign:'center',color: '#fff' }} >This is the Game Page</Typography>
      { questionToDisplay }
    </>
  )
}

export default Game