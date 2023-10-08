// External Dependencies
import { Autocomplete, TextField } from "@mui/material"

// Internal Dependencies
import { CountriesProps } from "."

function SearchBar({ data }: CountriesProps) {

  // const options = data.countries?.map(country=>{
  //   return country.name
  // })

  const options = [
    {value: 'Yo Mamma'},
    {value: 'Yo Daddy'},
    {value: 'Yo Frieeeend'}
  ]

  return (
    <Autocomplete
      disablePortal
      id="searchbar"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  )
}

export default SearchBar