// External Dependencies
import { Backdrop, Button, Card, Typography } from "@mui/material"

// Internal Dependencies
import { Language, State } from "../../gql/getCountries";
import { useMemo } from "react";


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

// Languages, currency, number of states, flag, 

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

  const statesToDisplay = useMemo(()=>{
    if (states.length === 0){
      return <Typography variant="body1">-This country has 0 states.</Typography>
    }

    return states.map(state=>{
      return <Typography variant="body1">- {state.name}</Typography>
    })
  }, [states])

  const languagesToDisplay = useMemo(()=>{
    return languages.map(language=>{
      return <Typography variant="body1">- {language.native}</Typography>
    }) 
  }, [languages]);

  // console.log(`POPUP: ${name}`, languages)

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
      >
        <Card elevation= {4} sx={{ maxWidth: 450, padding:4, margin:'auto' }}>
          <Typography variant="h3" >{name}</Typography>
          <Typography variant="h2" >{emoji}</Typography>
          <Typography variant="h6" ><strong>Continent:</strong> {continent}</Typography>
          <Typography variant="h6" ><strong>Currency:</strong> {currency}</Typography>

          <Typography variant="h6" ><strong>Languages:</strong></Typography>
          {languagesToDisplay}

          <Typography variant="h6" ><strong>States:</strong></Typography>
          {statesToDisplay}

          <Button onClick={handleClose}>Close</Button>
        </Card>
      </Backdrop>
    </div>
  )
}

export default Popup;