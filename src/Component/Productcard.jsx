import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Productcard({item}) {
    return (
        <>

      <Card sx={{ maxWidth: 300 }}>
         <CardMedia>
            <img src={item.image}  alt={item.title} component ="img" height="200px" ></img>
         </CardMedia>
         <CardContent>
            <Typography variant="h6">Title:{item.title}</Typography>
            <Typography variant="body1">Price :{item.price}</Typography>
            <Typography variant="body2">Category:{item.category}</Typography>
          </CardContent> 
         <Button variant="contained" fullWidth>
            View product
         </Button>
      </Card>
        
        </>
      );
}

export default Productcard;