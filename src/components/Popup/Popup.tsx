// External Dependencies
import { useMemo } from "react";
import { Backdrop, Button, Card, List, Typography } from "@mui/material"

// Internal Dependencies
import { Language, State } from "../../gql/getCountries";


interface PopupProps{
  handleClose: ()=> void; 
  isOpen: boolean;
  currency: string;
  continent: string;
  languages: Language[];
  states: State[];
  emoji: string;
  name: string;
}

function Popup({ 
  handleClose, 
  isOpen,
  currency,
  continent,
  languages,
  states,
  emoji,
  name
}: PopupProps) {

  const cardStyles = { 
    width: 700, 
    maxHeight: 900,
    padding:6, 
    margin:'auto',
    maxWidth: 800,
    display: 'block',
    textAlign: 'center'
};

  const listStyles = {
    width: '100%',
    maxWidth: 300,
    margin: 'auto',
    bgcolor: 'background.paper',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 250,
    '& ul': { padding: 0.5 },
  };


  const statesToDisplay = useMemo(()=>{
    if (states.length === 0){
      return <Typography variant="body1">-This country has 0 states.</Typography>
    }

    return states.map((state, idx)=>{
      return <Typography variant="body1" key={`${idx}-${state.name}`} >- {state.name}</Typography>
    })
  }, [states])


  const languagesToDisplay = useMemo(()=>{
    return languages.map((language, idx)=>{
      return <Typography variant="body1" key={`${idx}-${language.native}`} >- {language.native}</Typography>
    }) 
  }, [languages]);

  
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
      >
        <Card elevation= {4} sx={cardStyles}>
          <Typography variant="h3" >{name}</Typography>
          <Typography variant="h2" >{emoji}</Typography>
          <Typography variant="h6" ><strong>Continent:</strong> {continent}</Typography>
          <Typography variant="h6" ><strong>Currency:</strong> {currency}</Typography>

          <Typography variant="h6" ><strong>Languages:</strong></Typography>
          <List
            sx={listStyles}
            subheader={<li />}
          >
            {languagesToDisplay}
          </List>

          <Typography variant="h6" >
            <strong>States: {states.length > 0 ? `(${states.length})` : ''}</strong>
          </Typography>
          <List
            sx={listStyles}
            subheader={<li />}
          >
            {statesToDisplay}
          </List>

          <Button 
            size="large" 
            variant="contained" 
            onClick={handleClose}
            sx={{ marginTop: 6 }}
          >
            Close
          </Button>
        </Card>
      </Backdrop>
    </div>
  )
}

export default Popup;