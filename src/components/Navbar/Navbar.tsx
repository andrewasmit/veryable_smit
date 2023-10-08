//External Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material"

// Local Dependencies
import { handleClickNavigationTab } from "../../utils/navigation-helpers";

//Local Typings
const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

// Component Definition
function Navbar() {

  const [pageIdx, setPageIdx] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newIdx: number) => {
    setPageIdx(newIdx);
    const url = handleClickNavigationTab(event.target.innerText)
    navigate(`/${url}`)
  };

  const navbarContainerStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    boxSizing: 'border-box',
    color: '#fff',
    background: '#333366',
    opacity: 0.9 
  }

  return (
    <Box sx={navbarContainerStyles}  >
      <Box 
          component="img"
          sx={{
            height: 'auto',
            width: 200,
          }}
          alt="navbar-logo"
          src="/logo/logo-secondary.png"
        />  
        
      <Box sx={{ width: '100%' }}>
        <Tabs 
          value={pageIdx} 
          onChange={handleChange} 
          aria-label="navbar" 
          centered
          textColor="inherit" 
          indicatorColor="secondary"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Study" {...a11yProps(1)} />
          <Tab label="Play!" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  )
}

export default Navbar