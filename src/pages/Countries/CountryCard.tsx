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

// Local Dependencies
import './countries.css'
import Popup from '../../components/Popup/Popup';


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
    <Box onClick={handleClickLearnMore} component="div" >
      <Card elevation= {4} sx={{ maxWidth: 450, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h1'>{emoji}</Typography>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='h6'>{continent.name}</Typography>
        <CardActions>
          <Button 
            size="small" 
            onClick={handleClickLearnMore}
          >
            Learn More!
          </Button>
        </CardActions>

        <Popup isOpen={isOpen} handleClose={handleClickLearnMore} />
        
      {/* { isOpen &&
        <div>
          <Typography variant='h5'>Currency: {currency}</Typography>
          <Typography variant='h5'>Flag: {emoji}</Typography>
        </div>
      } */}

      </Card>
    </Box>
    </div>
  )
}

export default CountryCard