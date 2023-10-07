// External Dependencies
import { Typography } from "@mui/material"

type WelcomeParams = {
  loading: boolean;
}

function Welcome({ loading }: WelcomeParams) {


  if(loading){ 
    return <Typography variant='h4'>Loading...</Typography>
  }
  
  return (
    <div id="welcome-page-container">
      <Typography variant="h1">This is the Welcome Page</Typography>
      <Typography variant="h3">This is Andrew's Smit's takehome assignment for Veryable</Typography>
    </div>
  )
}

export default Welcome