// External Dependencies
import { useMemo } from "react"
import { Typography } from "@mui/material"


// Internal Dependencies
import { CountriesProps } from "../Countries"


// Local Dependencies


function Game({ data }:CountriesProps) {

  const randomIdx = Math.floor(Math.random() * data.countries?.length)
  console.log("RANDOM: ", randomIdx);

  const questionToDisplay = data.countries[randomIdx]

  
  return (
    <>
      <Typography variant="h1">This is the Game Page</Typography>
    </>
  )
}

export default Game