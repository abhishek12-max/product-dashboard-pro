import TextField from '@mui/material/TextField';
function Searchbox({search,setSearch}) {
   function changehandle(e){
       setSearch(e.target.value)
   }

    return ( 
        <>
       <TextField label="Search Product" value={search} onChange={changehandle} fullWidth/>
        </>
     );
}

export default Searchbox;