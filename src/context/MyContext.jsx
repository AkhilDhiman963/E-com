import axios from "axios";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Store = createContext()

export const ContextProvider = ({children})=>{

    const [product, setProduct] = useState()
    const [allProductsData, setAllProductsData] = useState([])
    const [cart, setCart] = useState(
      // []
      JSON.parse(localStorage.getItem("cartItems"))?JSON.parse(localStorage.getItem("cartItems")):[]
    )

    let getAllProducts = async () => {
        try {
          let res = await axios.get("https://fakestoreapi.com/products")
        setAllProductsData(res.data)  
        } catch (error) {
          console.log("error in fetching all products data", error);
          
        }
    }

    useEffect(()=>{getAllProducts()},[])
  

    return <Store.Provider value={{product, setProduct, allProductsData, cart, setCart}}>
        {children}
    </Store.Provider>
}