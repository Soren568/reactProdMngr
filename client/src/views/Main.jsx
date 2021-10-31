import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Loads this when Main loads
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

    return (
        <div>
            <ProductForm/>
            <hr className="my-5"/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main
