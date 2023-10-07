// External Dependencies
import { useCallback, useState } from 'react'
import { 
  Button, 
  Typography, 
  Collapse, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions 
} from '@mui/material'

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
      <Card elevation= {8} sx={{ maxWidth: 450, padding:4, margin:2 }}>
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
        
      { isOpen &&
        <div>
          <Typography variant='h5'>Currency: {currency}</Typography>
          <Typography variant='h5'>Flag: {emoji}</Typography>
        </div>
      }

      </Card>
    </div>
  )
}

export default CountryCard