import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Dropdown_category({filter,setFilter,categories}) {
     function changehandle(e){
        setFilter(e.target.value)
     }
    return (
        <>
        <FormControl style={{margin:"10px"}} >
          <InputLabel>Category</InputLabel>
          <Select value={filter} onChange={changehandle}>
               <MenuItem value={"All"}>All</MenuItem>
               {categories.map((item,index)=>(
                  <MenuItem key={index} value={item}>{item}</MenuItem>
               ))}
          </Select>
        </FormControl>
      
        </>
      );
}

export default Dropdown_category;