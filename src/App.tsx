// External Dependencies
import { Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom';

//Internal Dependencies
import { useGetCountries } from './gql/getCountries'
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar/Navbar';
import Countries from './pages/Countries';

//Local Dependencies
import './App.css'


// Component Definition
function App() {

  const { data: countries, loading, error } = useGetCountries();
  console.log("COUNTRIES: ", countries)

  if(loading){ 
    return <Typography variant='h4'>Loading...</Typography>
  }

  if(error){
    console.log(error);
  }
  
  return (
    <div id="main-container">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Welcome loading={loading}/>} />
        <Route path='/countries' element={<Countries data={countries}/>} />
        {/* <Route path='/game' element={<Game loading={loading}/>} /> */}
      </Routes>
    </div>
  )
}

export default App
