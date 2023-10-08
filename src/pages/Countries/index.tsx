// External Dependencies
import { Grid, Typography } from '@mui/material'
import { useMemo } from 'react';

// Internal Dependencies
import { Country } from '../../gql/getCountries';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';

export interface CountriesProps{
  data: {
    countries: Country[] | undefined;
  }
}

function Countries({ data }: CountriesProps) {

  const countriesToDisplay = useMemo(()=> {
    return data.countries?.map((country, idx)=>{
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
  }, [data]);

  
  return (
    <div>
      <Typography variant='h2'>This is the countries page</Typography>

      <SearchBar data={data} />

      <Grid container spacing={2}>
        { countriesToDisplay }
      </Grid>
    </div>
  )
}

export default Countries;