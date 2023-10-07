// External Dependencies
import { Typography } from '@mui/material'
import React, { useMemo } from 'react';

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
      return <CountryCard
                key={country.name}
                continent={country.continent}
                currency={country.currency}
                emoji={country.emoji}
                emojiU={country.emojiU}
                languages={country.languages}
                name={country.name}
                states={country.states}
              />
    })
  }, [data]);

  return (
    <div>
      <Typography variant='h2'>This is the countries page</Typography>

      { countriesToDisplay }
    </div>
  )
}

export default Countries;