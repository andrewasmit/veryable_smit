// External Dependencies
import { useCallback, useState } from 'react'
import { 
  Button, 
  Typography, 
  Card, 
  CardActions, 
  Box,
  Fab
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Internal Dependencies
import { Country } from '../../gql/getCountries'
import Popup from '../../components/Popup/Popup';
import { useIsOpen } from '../../utils/useIsOpen';
import { useAppDispatch } from '../../redux/hooks';
import { addToFavorites, removeFromFavorites } from '../../redux/favoriteSlice';

// Component Definition
function CountryCard({
  continent,
  currency,
  emoji,
  languages,
  name,
  states,
}: Country ) {

  const { isOpen, handleOpen, handleClose } = useIsOpen();
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickLearnMore = useCallback(()=>{
    handleOpen();
  }, []);
  
  // export interface Country {
  //   continent: Continent[];
  //   currency: string;
  //   emoji: string;
  //   languages: Language[];
  //   name: string;
  //   states: State[];
  // }

  const handleClickFavorite = useCallback(()=>{
    if (!isFavorite){
      const newFavorite: Country = {
        continent,
        currency,
        emoji,
        languages,
        name,
        states
      }
      dispatch(addToFavorites(newFavorite))
    } else {
      dispatch(removeFromFavorites(name))
    }
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  return (
    <Box component="div" sx={{ padding: 2 }}>
      <Card elevation= {3} sx={{ maxWidth: 450, padding:4, margin:'auto', ':hover':{ boxShadow:20 } }}>
        <Typography variant='h1'>{emoji}</Typography>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='h6'>{continent.name}</Typography>
        <CardActions sx={{ display: 'flex', alignContent: 'space-between' }}>
          <Button 
            size="small" 
            onClick={handleClickLearnMore}
          >
            Show Details
          </Button>

          <Fab 
            onClick={handleClickFavorite} 
            size='small'
            color= {isFavorite ? 'error' : 'info'}
            aria-label="favorite"
          >
            {isFavorite ? 
              <FavoriteIcon /> :
              <FavoriteBorderIcon />
            }
          </Fab>
        </CardActions>

        <Popup 
          isOpen={isOpen} 
          handleClose={handleClose}
          currency={currency}
          continent={continent.name}
          languages={languages}
          name={name}
          states={states}
          emoji={emoji}
        />

      </Card>
    </Box>
  )
}

export default CountryCard