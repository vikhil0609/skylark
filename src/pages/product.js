import Product_cart from "../components/product/product_cart";
import React from "react";
import FooterPage from "../components/Footer";
class productPage extends React.Component {
    render(){
        return(
        <div>
           <Product_cart />
           <FooterPage/> 
        </div>
        );
    }
}

export default productPage