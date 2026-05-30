import Productcard from "./Productcard";

function Productlist({product}) {
    return (  
        <>
        <div style={{display:"flex",flexWrap:"wrap",gap:"150px"}}>
            {product.map((item,index)=>(
            <div key={item.id}>
                <Productcard item={item}/>
            </div>
        ))}
        </div>
       
        </>
    );
}

export default Productlist;