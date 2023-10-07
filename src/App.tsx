// External Dependencies
import { Typography } from '@mui/material'

//Internal Dependencies
import { useGetCountries } from './gql/getCountries'

//Local Dependencies
import './App.css'


function App() {

  const { data: countries, loading, error } = useGetCountries();

  console.log("COUNTRIES: ", countries)

  if(loading){ 
    return <Typography variant='h4'>Loading...</Typography>
  }
  
  return (
    <div id="main container">
      <Typography variant="h1">Smit's Take Home Assignment</Typography>
      <Typography variant="h3">Veryable</Typography>
    </div>
  )
}

export default App
