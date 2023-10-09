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
import { useIsOpen } from '../../utils/useIsOpen';
import Selection from './Selection';


// Component Definition
function CountryCard({ data }: Country ) {

  const [isAnswered, setIsAnswered] = useState(false);
  const { isOpen, handleOpen, handleClose } = useIsOpen();
  
  const handleChooseAnswer = useCallback(()=>{
    setIsAnswered(true);
  }, []);

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
            onClick={handleChooseAnswer}
            variant='contained'
            color='primary'
            fullWidth
            sx={btnStyles}
          >
            Option 1
          </Button>

          <Button 
            size="small" 
            onClick={handleChooseAnswer}
            variant='contained'
            color='error'
            fullWidth
            sx={btnStyles}
          >
            Option 2
          </Button>

          <Button 
            size="small" 
            onClick={handleChooseAnswer}
            variant='contained'
            color='success'
            fullWidth
            sx={btnStyles}
          >
            Option 3
          </Button>

          <Selection
            handleChooseAnswer={handleChooseAnswer}
            text={'THIS IS A TEST'}
            isCorrectAnswer={true}
            isAnswered={isAnswered}
          />

        </CardActions>
      </Card>
    </Box>
  )
}

export default CountryCard