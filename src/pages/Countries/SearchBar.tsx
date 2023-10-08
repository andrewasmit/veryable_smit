// External Dependencies
import { 
  Dispatch, 
  SetStateAction, 
  useCallback, 
  useMemo, 
  useState 
} from "react";
import { Box, Button, TextField } from "@mui/material"

// Internal Dependencies
import { Country } from "../../gql/getCountries";

// Local Typings
interface SearchBarProps{
  data: Country[] | undefined;
  handleSearchFilter: Dispatch<SetStateAction<Country[] | undefined>>
}

// Component Definition
function SearchBar({ data, handleSearchFilter }: SearchBarProps) {

  const [search, setSearch] = useState('');

  const allData = useMemo(()=>{
    return data;
  },[])

  const handleSearchText = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }, [search]);

  const handleFilterData = useCallback(()=>{
    const filteredData = allData?.filter(country=>country.name.toLowerCase().includes(search.toLowerCase()))
    handleSearchFilter(filteredData)
  },[data, search]);

  const handleResetFilter = useCallback(()=>{
    handleSearchFilter(allData)
    setSearch('');
  },[]);

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', display: 'flex' }}>
      <TextField 
        label="Search for a Country" 
        value={search} 
        onChange={handleSearchText}
        sx={{ width: '400px' }}
      />
      <Button type="submit" onClick={handleFilterData} variant="contained" >Search</Button>
      <Button onClick={handleResetFilter} variant="outlined" >Clear</Button>
    </Box>
  )
}

export default SearchBar;