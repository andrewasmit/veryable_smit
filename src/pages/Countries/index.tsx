// External Dependencies
import { Grid, Typography } from '@mui/material'
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


  return (
    <div>
      <Typography variant='h2'>This is the countries page</Typography>

      <SearchBar 
        data={searchedCountries} 
        handleSearchFilter={setSearchedCountries} 
      />

      <Grid container spacing={2}>
        { countriesToDisplay }
      </Grid>
    </div>
  )
}

export default Countries;