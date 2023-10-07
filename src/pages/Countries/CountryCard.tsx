// External Dependencies
import { useCallback, useState } from 'react'
import { Button, Typography, Collapse } from '@mui/material'

// Internal Dependencies
import { Country } from '../../gql/getCountries'

// Local Dependencies
import './countries.css'


// Component Definition
function CountryCard({
  continent,
  currency,
  emoji,
  emojiU,
  languages,
  name,
  states,
}: Country ) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClickLearnMore = useCallback(()=>{
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='country-card'>
      <Typography variant='h3'>{name}</Typography>
      <Typography variant='h4'>{continent.name}</Typography>
      {/* <Typography variant='h5'>Learn More</Typography> */}
      <Button onClick={handleClickLearnMore}>Learn More!</Button>

    { isOpen &&
      <div>
        <Typography variant='h5'>Currency: {currency}</Typography>
        <Typography variant='h5'>Flag: {emoji}</Typography>
      </div>
    }

    </div>
  )
}

export default CountryCard