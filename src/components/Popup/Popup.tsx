// External Dependencies
import { Backdrop, Typography } from "@mui/material"

interface PopupProps{
  handleClose: ()=> void; 
  isOpen: boolean;
}
function Popup({ handleClose, isOpen }: PopupProps) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
        onClick={handleClose}
      >
        <Typography variant="h3" >This is a popup</Typography>
      </Backdrop>
    </div>
  )
}

export default Popup;