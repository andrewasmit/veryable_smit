// External Dependencies
import { useCallback, useMemo, useState } from 'react'
import { 
  Typography, 
  Card, 
  CardActions, 
  Box,
  Button
} from '@mui/material'

// Local Dependencies
import Selection from './Selection';


export interface PotentialAnswer{
  name: string;
  emoji: string;
}
interface CountryCardProps{
  answerData: PotentialAnswer[];
  score: number;
  setScore: any;
}

// Component Definition
function CountryCard({  answerData, score, setScore }: CountryCardProps ) {

  const [isAnswered, setIsAnswered] = useState(false);
  let isCorrect: boolean;

  const handleChooseAnswer = useCallback((e: any)=>{
    setIsAnswered(true);
    
    if (e.target.innerText.toLowerCase() === answerData[winnerIdx].name.toLowerCase()){
      isCorrect = true;
    } else
      isCorrect = false;
  }, [answerData]);


  const handleNewGame = useCallback(()=>{
    setIsAnswered(false);
    isCorrect ? setScore(score + 1) : setScore(score - 1);
  }, [score])
  

  const winnerIdx = useMemo(()=>{
    return Math.floor(Math.random() * 4)
  },[answerData])


  const selectionsToDisplay: any = [];

  for(let i =0; i<4; i++){
    const country = answerData[i]
    selectionsToDisplay.push(
      <Selection
        key={country.name}
        handleChooseAnswer={handleChooseAnswer} 
        text={country.name} 
        isCorrectAnswer={i === winnerIdx} 
        isAnswered={isAnswered} 
      />
    )
  };


  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Card elevation= {3} sx={{ textAlign: 'center', maxWidth: 550, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h3'>Guess the flag!</Typography>

        <Typography variant='h1'>{answerData[winnerIdx].emoji}</Typography>

        <CardActions sx={{ display: 'block', margin:'auto' }}>
          {selectionsToDisplay}
        </CardActions>

        {isAnswered &&
            <Button 
              onClick={handleNewGame} 
              variant='outlined' 
              color='secondary'
              sx={{ 
                margin: 2, 
                padding: 2, 
                backgroundColor: '#333366', 
                color: '#ffff33', 
                ':hover':{ 
                  color: '#333366', 
                  backgroundColor: '#ffff33', 
                  boxShadow: 15
                  } 
                }}
            >
              Next Question
            </Button>
        }

      </Card>
    </Box>
  )
}

export default CountryCard