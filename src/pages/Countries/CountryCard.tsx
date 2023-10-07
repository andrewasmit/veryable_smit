// External Dependencies
import { Button, Typography } from '@mui/material'

// Internal Dependencies
import { Country } from '../../gql/getCountries'

// Local Dependencies
import './countries.css'
import { useCallback } from 'react'


// export interface Country {
//   continent: Continent[];
//   currency: string;
//   emoji: string;
//   emojiU: string;
//   languages: Language[];
//   name: string;
//   states: State[];
// }

function CountryCard({
  continent,
  currency,
  emoji,
  emojiU,
  languages,
  name,
  states,
}: Country ) {

  const handleClickLearnMore = useCallback(()=>{
    console.log(currency, emoji, emojiU, languages, states)
    console.log("Continent: ", continent)
  }, []);

  return (
    <div className='country-card'>
      <Typography variant='h3'>{name}</Typography>
      <Typography variant='h4'>{continent.name}</Typography>
      {/* <Typography variant='h5'>Learn More</Typography> */}
      <Button onClick={handleClickLearnMore}>Learn More!</Button>
    </div>
  )
}

export default CountryCard