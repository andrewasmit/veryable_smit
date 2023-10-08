// External Dependencies
import { Box, Grid, Typography } from '@mui/material'
import { useMemo, useState } from 'react';

// Internal Dependencies
import { Country } from '../../gql/getCountries';

// Local Dependencies
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';


// Local Typings
export interface CountriesProps{
  data: {
    countries: Country[] | undefined;
  },
}

// Component Definition
function Countries({ data }: CountriesProps) {

  const [searchedCountries, setSearchedCountries] = useState(data.countries);

  const countriesToDisplay = useMemo(()=> {
    return searchedCountries?.map((country, idx)=>{
      return <Grid item xs={12} sm={6} lg={4} xl={3} key={`${country.name}-${idx}`} >
              <CountryCard
                continent={country.continent}
                currency={country.currency}
                emoji={country.emoji}
                languages={country.languages}
                name={country.name}
                states={country.states}
              />
            </Grid>
    })    
  }, [searchedCountries]);

  // console.log("IN INDEX. Searched Countries: ", searchedCountries)

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', color: '#333' }}>
      <Typography variant='h3' sx={{ padding: 4, textAlign: 'center', fontSize: '50px' }}>
        Search the Globe for info about other  countries!
      </Typography>

      <SearchBar 
        data={searchedCountries} 
        handleSearchFilter={setSearchedCountries} 
      />

      {countriesToDisplay &&
        <Grid container spacing={2}>
          { countriesToDisplay }
        </Grid> 
      }

      {countriesToDisplay?.length === 0 && 
        <Typography variant='h5' sx={{ textAlign: 'center', marginTop: 5, padding: 5 }}>No Results Found</Typography> 
      }
    </Box >
  )
}

export default Countries;