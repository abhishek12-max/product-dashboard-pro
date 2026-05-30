import { useState, useEffect} from "react";
import Searchbox from "./Searchbox";
import Productlist from "./Productlist";
import Dropdown_category from "./Dropdown_category";
import Product_stats from "./Product_stats";
function Product_app() {
      const[product,setProduct]=useState([]);
    const[search,setSearch]=useState("");
    const[loading,setLoading]=useState(true);
    const[filter,setFilter]=useState("All");


    async function getproduct() {
     let res = await fetch("https://fakestoreapi.com/products")
     let data= await res.json()
     setProduct(data);
     setLoading(false);
}

  useEffect(()=>{
   getproduct();
  },[]);

  
  const categories = [
   ...new Set(
      product.map((item) => item.category)
   )
];

   const fillterproduct= product.filter((item)=>{

    let searchmatch = item.title.toLowerCase().includes(search.toLowerCase());
    let filltermatch= false
    if(filter=== "All"){
        filltermatch= true;
    }else{
        filltermatch = item.category===filter;
    }
   
   return searchmatch && filltermatch

})

    return ( 
        <>
        {loading?<h1>loading</h1>:
          <div>
             <Product_stats product={product} showing={fillterproduct}/>
            <Searchbox search={search} setSearch={setSearch} /> 
       <Dropdown_category categories={categories} filter={filter} setFilter={setFilter}/>
       <Productlist product={fillterproduct}/>
      
          </div>
         }
      

        </>
     );
}

export default Product_app;