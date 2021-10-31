import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log(productId)
                history.push('/')
            })
            .catch(err => console.error(err))
    }

    const goBack = (e) => {
        history.push('/')
    }
    return (
        <>
            <div className="text-purple-900 text-left bg-gray-100 ml-8 mt-5 max-h-40 p-4">
                <div>
                    <h1 className="font-mono text-lg text-purple-400" >Single Product</h1>
                    <p>Title: {product.title} </p>
                    <p>Price: ${product.price} </p>
                    <p>Description: {product.description} </p>
                </div>
                <div className="flex mt-6 justify-between">
                    <button onClick={goBack} className="bg-purple-400 p-2 text-white rounded hover:bg-purple-500 text-xs">Go Back</button>
                    <Link to={"/products/" + product._id + "/edit"} className="bg-purple-400 p-2 text-white rounded hover:bg-purple-500 items-center flex text-xs ml-2">Edit</Link>
                    <button onClick={(e) => { deleteProduct(product._id) }} className="bg-purple-400 p-2 text-white rounded hover:bg-purple-500 text-xs flex items-center ml-2">
                        Delete
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="triangles" clip-path="url(#clip0_0:1)">
                    <rect width="120" height="100" fill="white" />
                    <g id="pinkGroup">
                        <path id="pink2" opacity="0.7" d="M37.9481 47.7669C39.3289 48.5202 39.3399 50.499 37.9676 51.2676L8.94152 67.5239C7.61265 68.2682 5.97273 67.3131 5.96427 65.79L5.78541 33.601C5.77695 32.0779 7.40615 31.1047 8.74321 31.8342L37.9481 47.7669Z" />
                        <path id="pink1" opacity="0.7" d="M52.9482 47.7669C54.3289 48.5202 54.3399 50.499 52.9676 51.2676L23.9415 67.5239C22.6127 68.2682 20.9727 67.3131 20.9643 65.79L20.7854 33.601C20.777 32.0779 22.4062 31.1047 23.7432 31.8342L52.9482 47.7669Z" />
                    </g>
                    <g id="purpleGroup">
                        <path id="purple1" opacity="0.7" d="M37.9481 47.7669C39.3289 48.5202 39.3399 50.499 37.9676 51.2676L8.94152 67.5239C7.61265 68.2682 5.97273 67.3131 5.96427 65.79L5.78541 33.601C5.77695 32.0779 7.40615 31.1047 8.74321 31.8342L37.9481 47.7669Z" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_0:1">
                        <rect width="120" height="100" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}

export default Detail
