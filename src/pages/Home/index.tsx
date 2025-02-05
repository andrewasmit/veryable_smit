// External Dependencies
import { Box, Typography } from "@mui/material"

type HomeParams = {
  loading: boolean;
}

function Home({ loading }: HomeParams) {

  if(loading){ 
    return <Typography 
              variant='h4' 
              sx={{ display: 'block', margin: 'auto', textAlign: 'center', backgroundColor: '#333366', color: "#ffff44" }}
            >Loading...</Typography>
  }
  
  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}} >
        <Box 
          component="img"
          sx={{
            opacity: 0.9,
            height: 500,
            width: 500,
            margin: 10
          }}
          alt="main-logo"
          src="/logo/logoColor.png"
        />         
        </Box>
  )
}

export default Home