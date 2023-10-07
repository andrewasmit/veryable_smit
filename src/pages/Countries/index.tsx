// External Dependencies
import { Typography } from '@mui/material'

// Internal Dependencies
import { Country } from '../../gql/getCountries';

interface CountriesProps{
  data: Country[] | undefined;
}

function Countries({ data }: CountriesProps) {

  console.log("In CONTRIES: ",  data)

  return (
    <div>
      <Typography variant='h2'>This is the countries page</Typography>
    </div>
  )
}

export default Countries;