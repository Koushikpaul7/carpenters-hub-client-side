import { useEffect, useState } from "react"

const UseProducts=()=>{
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://aqueous-ravine-04948.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return[products,setProducts];

}
export default UseProducts;