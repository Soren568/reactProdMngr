import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';

const ProductList = (props) => {
    const history = useHistory();
    const {removeFromDom} = props;

    const deleteProduct =(productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    // Push to details page, passing current props (removeFromDom) on to the pushed path as props under the same name
    const toDetails = (productId) => {
        // debugging: causes error when using a pushed method.
        // history.push({path: `/products/${productId}`, state:{removeFromDom: removeFromDom}})
        
        history.push(`/products/${productId}`)
    }
    return (
        <div>
            <h1 className="text-lg mb-4 font-mono font-extrabold text-purple-500">All products</h1>
            <ul className="list-decimal text-purple-900">
                {props.products.map((prod, i) => {
                    return(
                        <li key={i} className="text-left pl-4 align-middle mb-2" > 
                            <span onClick={e => {toDetails(prod._id)}} className="hover:underline cursor-pointer">{prod.title}, ${prod.price} </span>
                            <button onClick={(e) => {deleteProduct(prod._id)}} className="bg-purple-400 px-2 py-1 text-white rounded hover:text-red-100 justify-self-end text-xs ml-2">Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductList
