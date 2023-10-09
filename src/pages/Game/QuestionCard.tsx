// External Dependencies
import { useState } from 'react'
import { 
  Button, 
  Typography, 
  Card, 
  CardActions, 
  Box
} from '@mui/material'

// Internal Dependencies
import { Country } from '../../gql/getCountries'
import { useIsOpen } from '../../utils/useIsOpen';


// Component Definition
function CountryCard({ data }: Country ) {

  const [isAnswered, setIsAnswered] = useState(true);
  const { isOpen, handleOpen, handleClose } = useIsOpen();

  const btnStyles = {
    marginTop: 2,  
    ':hover':{ 
      color: '#333366', 
      backgroundColor: '#ffff33', 
      boxShadow: 15
    },
    ':not(:first-of-type)':{
      marginLeft: 0,
    },
    padding: 1,
    fontSize: 20
  }

  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Card elevation= {3} sx={{ textAlign: 'center', maxWidth: 550, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h3'>Guess the flag!</Typography>
        <Typography variant='h1'>{data.emoji}</Typography>
        
        {isAnswered &&
          <Typography variant='h5'><strong>Country:</strong> {data.name}</Typography>
        }

        <CardActions sx={{ display: 'block', margin:'auto' }}>
          <Button 
            size="small" 
            onClick={handleOpen}
            variant='contained'
            color='primary'
            fullWidth
            sx={btnStyles}
          >
            Option 1
          </Button>

          <Button 
            size="small" 
            onClick={handleOpen}
            variant='contained'
            color='primary'
            fullWidth
            sx={btnStyles}
          >
            Option 2
          </Button>

          <Button 
            size="small" 
            onClick={handleOpen}
            variant='contained'
            color='primary'
            fullWidth
            sx={btnStyles}
          >
            Option 3
          </Button>

        </CardActions>
      </Card>
    </Box>
  )
}

export default CountryCard