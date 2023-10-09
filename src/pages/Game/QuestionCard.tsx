// External Dependencies
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'
import { 
  Typography, 
  Card, 
  CardActions, 
  Box,
  Button
} from '@mui/material'

// Internal Dependencies
import { shuffleArray } from '../../utils/shuffleArray';

// Local Dependencies
import Selection from './Selection';


export interface PotentialAnswer{
  name: string;
  emoji: string;
}
interface CountryCardProps{
  correctAnswerData: PotentialAnswer;
  wrongAnswerData: PotentialAnswer[];
  score: number;
  setScore: any;
}

// Component Definition
function CountryCard({ correctAnswerData, wrongAnswerData, score, setScore }: CountryCardProps ) {

  const [isAnswered, setIsAnswered] = useState(false);
  let isCorrect: boolean;
  
  const handleChooseAnswer = useCallback((e)=>{
    setIsAnswered(true);
    if (e.target.innerText.toLowerCase() === correctAnswerData.name.toLowerCase()){
      isCorrect = true;
    } else
      isCorrect = false;
  }, [correctAnswerData]);

  const handleNewGame = useCallback(()=>{
    setIsAnswered(false);
    isCorrect ? setScore(score + 1) : setScore(score - 1);
  }, [score])

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
    return shuffleArray(answers);
  },[correctAnswer, wrongAnswers])

  
  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Card elevation= {3} sx={{ textAlign: 'center', maxWidth: 550, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h3'>Guess the flag!</Typography>

        <Typography variant='h1'>{correctAnswerData.emoji}</Typography>

        <CardActions sx={{ display: 'block', margin:'auto' }}>
          {selectionsToDisplay}
        </CardActions>

        {isAnswered &&
          <Button onClick={handleNewGame}>Next Question</Button>
        }

      </Card>
    </Box>
  )
}

export default CountryCard