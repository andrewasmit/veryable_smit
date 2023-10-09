// External Dependencies
import { Box, Grid, Pagination, Typography } from '@mui/material'
import { useCallback, useMemo, useState } from 'react';

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

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCountries, setCurrentCountries] = useState(data.countries);

  const postsPerPage = 8;

  const lastIdx = useMemo(()=>{
    return currentPage * postsPerPage;
  },[currentPage, postsPerPage]);

  const firstIdx = useMemo(()=>{
    return lastIdx - postsPerPage;;
  },[lastIdx, postsPerPage]);
  
  const paginatedCountries = useMemo(()=>{
    return currentCountries?.slice(firstIdx, lastIdx)
  }, [currentPage, currentCountries, postsPerPage, firstIdx, lastIdx])

  const countriesToDisplay = useMemo(()=> {
    return paginatedCountries?.map((country, idx)=>{
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
  }, [currentCountries, paginatedCountries]);

  const numberOfPages = useMemo(()=>{
    if (currentCountries){
      return Math.ceil(currentCountries?.length / postsPerPage)
    }
  }, [currentCountries, postsPerPage]);

  const handleChangePages = useCallback((event: React.ChangeEvent<any>, page: number): void =>{
    // console.log("EVENT: ", event)
    setCurrentPage(page);
  },[]);


  return (
    <Box sx={{ color: '#333666', backgroundColor: '#f4f4f4', opacity: '0.99' }}>
      <Typography variant='h3' sx={{ background: '#333366', opacity: 0.85, color: '#fff', padding: 4, textAlign: 'center', fontSize: '50px', marginBottom: 4 }}>
        <Box component="span" sx={{ color: '#ffff44', background: '#333366', opacity:0.9, paddingRight: 2 }}>
          Travel the Globe 
        </Box> and learn more about our world!
      </Typography>

      <SearchBar 
        data={data.countries} 
        handleSearchFilter={setCurrentCountries} 
        resetPagination={setCurrentPage}
      />

      {countriesToDisplay &&
        <Grid container spacing={2}>
          { countriesToDisplay }
        </Grid> 
      }

      {countriesToDisplay?.length === 0 && 
        <Typography variant='h5' sx={{ textAlign: 'center', marginTop: 5, padding: 5 }}>No Results Found</Typography> 
      }

      <Pagination
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, marginBottom: 5 }}
        count={numberOfPages} 
        onChange={handleChangePages}
        color="secondary" 
        size='large' 
      />
    </Box >
  )
}

export default Countries;