//External Dependencies
import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material"

// Local Dependencies
import './navbar.css'
import { useNavigate } from "react-router-dom";
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

  // const navbarStyle = { display: 'flex', justify-content: 'center', align-items: 'center', box-sizing: 'border-box', color: '#fff', background: ' #333366', padding: '20px', opacity: '0.9' }


  return (
    <div id="navbar-container">
      <Typography variant="h4" >This is the Navbar</Typography>

      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="main-logo"
        src="../../assets/logo/logo-color.png"
      />

      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={pageIdx} 
          onChange={handleChange} 
          aria-label="navbar" 
          centered
          textColor="secondary" 
          indicatorColor="secondary"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Study" {...a11yProps(1)} />
          <Tab label="Play!" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </div>
  )
}

export default Navbar