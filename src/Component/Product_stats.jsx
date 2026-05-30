import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Product_stats({product,showing}) {
    return ( 
        <>

        <AppBar position="static">

         <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>Product Dashboard</Typography>
            <Typography sx={{ mr: 6 }}>Total Products : {product.length}</Typography>
            <Typography>Showing Products : {showing.length}</Typography>
         </Toolbar>

        </AppBar>
        </>
     );
}


export default Product_stats;