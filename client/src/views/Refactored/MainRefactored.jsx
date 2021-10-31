import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductListRefactored from '../../components/Refactored/ProductListRefactored';
import ProductFormRefactored from '../../components/Refactored/ProductFormRefactored';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Loads this when Main loads, and when the dependency state (products) is updated
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [products]);

    // Filter out the deleted product
    const removeFromDom = productID => {
        setProducts(products.filter(prod => prod._id != productID))
    }

    // ================= NEW ===================
    const createProduct = product => {
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res=>{setProducts([...products, res.data.product])})
            .catch(err=>console.log(err))
    }
    // =========================================

    return (
        <div>
            <ProductFormRefactored onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" button="Add"/>
            <hr className="my-5"/>
            {loaded && <ProductListRefactored products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
