// External Dependencies
import { useMemo } from 'react';
import { Button } from '@mui/material'


// Local Typings
interface SelectionProps{
  handleChooseAnswer: ()=> void;
  text: string;
  isCorrectAnswer: boolean;
  styles?: {};
  isAnswered: boolean;
}

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

// Component Definition
function Selection({ handleChooseAnswer, text, isCorrectAnswer, isAnswered, styles }: SelectionProps) {

  const answeredColor = useMemo(()=>{
    return isCorrectAnswer ? 'success' : 'error'
  }, [isAnswered]);

  return (
    <Button 
      size="small" 
      onClick={handleChooseAnswer}
      variant='contained'
      color={isAnswered ? answeredColor : 'primary' }
      fullWidth
      sx={btnStyles}
    >
      {text}
    </Button>
  )
}

export default Selection