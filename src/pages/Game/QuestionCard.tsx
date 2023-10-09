// External Dependencies
import { useCallback, useMemo, useState } from 'react'
import { 
  Typography, 
  Card, 
  CardActions, 
  Box
} from '@mui/material'

// Internal Dependencies
// import { useIsOpen } from '../../utils/useIsOpen';

// Local Dependencies
import Selection from './Selection';
import { shuffleArray } from '../../utils/shuffleArray';


export interface PotentialAnswer{
  name: string;
  emoji: string;
}
interface CountryCardProps{
  correctAnswerData: PotentialAnswer;
  wrongAnswerData: PotentialAnswer[];
}

// Component Definition
function CountryCard({ correctAnswerData, wrongAnswerData }: CountryCardProps ) {

  const [isAnswered, setIsAnswered] = useState(false);
  // const { isOpen, handleOpen, handleClose } = useIsOpen();
  
  const handleChooseAnswer = useCallback(()=>{
    setIsAnswered(true);
  }, []);

  const correctAnswer = useMemo(()=>{
    return <Selection
            key={correctAnswerData.name}
            handleChooseAnswer={handleChooseAnswer} 
            text={correctAnswerData.name} 
            isCorrectAnswer={true} 
            isAnswered={isAnswered} 
          />
  },[correctAnswerData, isAnswered, handleChooseAnswer])

  const wrongAnswers = useMemo(()=>{
    return wrongAnswerData.map(ans=>{
      return <Selection 
                key={ans.name}
                handleChooseAnswer={handleChooseAnswer} 
                text={ans.name} 
                isCorrectAnswer={false} 
                isAnswered={isAnswered} 
              />
    })
  },[wrongAnswerData, isAnswered, handleChooseAnswer])

  const selectionsToDisplay = useMemo(()=>{
    const answers = [...wrongAnswers, correctAnswer]
    // wrongAnswers.push(correctAnswer)
    return shuffleArray(answers);
  },[correctAnswer, wrongAnswers])

  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Card elevation= {3} sx={{ textAlign: 'center', maxWidth: 550, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h3'>Guess the flag!</Typography>
        <Typography variant='h1'>{correctAnswerData.emoji}</Typography>
        
        {isAnswered &&
          <Typography variant='h5'><strong>Country:</strong> {correctAnswerData.name}</Typography>
        }

        <CardActions sx={{ display: 'block', margin:'auto' }}>
          {selectionsToDisplay}
        </CardActions>
      </Card>
    </Box>
  )
}

export default CountryCard