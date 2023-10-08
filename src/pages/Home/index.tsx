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
      <Typography variant="h1">GlobeGuru</Typography>
      <Typography variant="h3">Learn more about our world</Typography>

      <img src="/public" alt="main-logo" />
    </div>
  )
}

export default Home