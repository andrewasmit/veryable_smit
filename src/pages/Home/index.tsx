// External Dependencies
import { Typography } from "@mui/material"

// Local Dependencies
import './Home.css'

type HomeParams = {
  loading: boolean;
}

function Home({ loading }: HomeParams) {

  if(loading){ 
    return <Typography variant='h4' sx={{ textAlign: 'center'}}>Loading...</Typography>
  }
  
  return (
    <div id="welcome-page-container">
      <Typography variant="h1">This is the Welcome Page</Typography>
      <Typography variant="h3">This is Andrew's Smit's takehome assignment for Veryable</Typography>
    </div>
  )
}

export default Home