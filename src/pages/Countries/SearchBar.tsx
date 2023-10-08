// External Dependencies
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material"

// Internal Dependencies
import { Country } from "../../gql/getCountries";

// Local Typings
interface SearchBarProps{
  data: Country[] | undefined;
  handleSearchFilter: Dispatch<SetStateAction<Country[] | undefined>>
}

// Component Definition
function SearchBar({ data, handleSearchFilter }: SearchBarProps) {

  // const [search, setSearch] = useState('');

  // const options = [
  //   {label: 'Yo Mamma'},
  //   {label: 'Yo Daddy'},
  //   {label: 'Yo Frieeeend'}
  // ]

  // const handleSearchText = useCallback((e)=>{
  //   setSearch(e.target.value)
  // }, [search]);

  const handleFilterData = useCallback((e)=>{
    const text = e.target.value;
    const filteredData = data?.filter(country=>country.name.toLowerCase().includes(text.toLowerCase()))
    handleSearchFilter(filteredData)
  },[data]);

  const handleResetFilter = useCallback(()=>{
    handleSearchFilter(data)
  },[]);

  return (
    // <Autocomplete
    //   disablePortal
    //   id="searchbar"
    //   options={options}
    //   sx={{ width: 300 }}
    //   renderInput={(params) => <TextField {...params} label="Search" />}
    // />
    <>
      <TextField 
        label="Search for a Country" 
        // value={search} 
        onChange={handleFilterData}
      />
      <Button onClick={handleFilterData} variant="contained" >Search</Button>
      <Button onClick={handleResetFilter} variant="outlined" >Clear</Button>
    </>
  )
}

export default SearchBar