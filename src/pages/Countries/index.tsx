// External Dependencies
import { Grid, Typography } from '@mui/material'
import { useMemo } from 'react';

// Internal Dependencies
import { Country } from '../../gql/getCountries';
import CountryCard from './CountryCard';

interface CountriesProps{
  data: {
    countries: Country[] | undefined;
  }
}

function Countries({ data }: CountriesProps) {

  const countriesToDisplay = useMemo(()=> {
    return data.countries?.map(country=>{
      return <Grid item xs={12} sm={6} lg={4} xl={3} >
              <CountryCard
                key={country.name}
                continent={country.continent}
                currency={country.currency}
                emoji={country.emoji}
                emojiU={country.emojiU}
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

      <Grid container spacing={2}>
        { countriesToDisplay }
      </Grid>
    </div>
  )
}

export default Countries;