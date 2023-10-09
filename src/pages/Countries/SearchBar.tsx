// External Dependencies
import { 
  Dispatch, 
  SetStateAction, 
  useCallback, 
  useMemo, 
  useState 
} from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material"

// Internal Dependencies
import { Country } from "../../gql/getCountries";
import { useAppSelector } from "../../redux/hooks";

// Local Typings
interface SearchBarProps{
  data: Country[] | undefined;
  handleSearchFilter: Dispatch<SetStateAction<Country[] | undefined>>
  resetPagination: (page: number)=> void;
}

// Component Definition
function SearchBar({ data, handleSearchFilter, resetPagination }: SearchBarProps) {

  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);

  const allData = useMemo(()=>{
    return data;
  },[])

  const { countries: favoriteCountries } = useAppSelector(state=>state.favorites);

  const handleSearchText = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }, [search]);

  const handleFilterData = useCallback(()=>{
    const filteredData = allData?.filter(country=>country.name.toLowerCase().includes(search.toLowerCase()))
    handleSearchFilter(filteredData);
    resetPagination(1);
  },[data, search]);

  const handleResetFilter = useCallback(()=>{
    handleSearchFilter(allData)
    setSearch('');
    setChecked(false);
    resetPagination(1);
  },[]);

  const handleCheck = useCallback(()=>{
    if(!checked){
      handleSearchFilter(favoriteCountries);
    } 

    if(checked){
      handleSearchFilter(allData);
    }

    setChecked(!checked)
    resetPagination(1);
  },[checked, favoriteCountries]);

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', display: 'flex', paddingBottom: 2 }}>
      <TextField 
        label="Search for a Country" 
        value={search} 
        onChange={handleSearchText}
        color="primary"
        sx={{ width: '400px', background: '#fff' }}
      />
      
      <Button 
        type="submit" 
        onClick={handleFilterData} 
        variant="contained" 
        color="primary" 
        sx={{ marginLeft: 1 }}
      >
        Search
      </Button>
      <Button 
        onClick={handleResetFilter} 
        variant="contained" 
        color="secondary" 
        sx={{ marginLeft: 1 }}
      >
        Clear
      </Button>

      <FormGroup>
        <FormControlLabel control={<Checkbox checked={checked} color="primary" onChange={handleCheck} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, marginLeft: '20px' }} />} label="Show My Favorites" />
      </FormGroup>
    </Box>
  )
}

export default SearchBar;