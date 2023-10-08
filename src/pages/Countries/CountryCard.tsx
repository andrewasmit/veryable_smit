// External Dependencies
import { useCallback, useState } from 'react'
import { 
  Button, 
  Typography, 
  Card, 
  CardActions, 
  Box
} from '@mui/material'

// Internal Dependencies
import { Country } from '../../gql/getCountries'
import Popup from '../../components/Popup/Popup';


// Component Definition
function CountryCard({
  continent,
  currency,
  emoji,
  languages,
  name,
  states,
}: Country ) {

  const [isOpen, setIsOpen] = useState(false);

  // console.log("IN COUNTRY CARD: ", states)
  const handleClickLearnMore = useCallback(()=>{
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='country-card'>
    <Box component="div" sx={{ padding: 2 }}>
      <Card elevation= {3} sx={{ maxWidth: 450, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h1'>{emoji}</Typography>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='h6'>{continent.name}</Typography>
        <CardActions>
          <Button 
            size="small" 
            onClick={handleClickLearnMore}
          >
            Show Details
          </Button>
        </CardActions>

        <Popup 
          isOpen={isOpen} 
          handleClose={handleClickLearnMore}
          currency={currency}
          continent={continent.name}
          languages={languages}
          name={name}
          states={states}
          emoji={emoji}
        />

      </Card>
    </Box>
    </div>
  )
}

export default CountryCard