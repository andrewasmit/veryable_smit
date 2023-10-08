// External Dependencies
import { Typography } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom';

//Internal Dependencies
import { useGetCountries } from './gql/getCountries'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Countries from './pages/Countries';

//Local Dependencies
import './App.css'
import { useEffect } from 'react';


// Component Definition
function App() {

  const { data, loading, error } = useGetCountries();
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/home');
  }, []);

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
        <Route path='/home' element={<Home loading={loading} />} />
        <Route path='/countries' element={<Countries data={data}  />} />
        {/* <Route path='/game' element={<Game loading={loading}/>} /> */}
      </Routes>
    </div>
  )
}

export default App
