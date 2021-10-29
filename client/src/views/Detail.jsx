import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams , Link} from 'react-router-dom';
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

    const deleteProduct =(productId) => {
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
            <div className="flex mt-6 justify-evenly">
                <button onClick={goBack} className="bg-purple-400 p-2 text-white rounded hover:bg-purple-500 justify-self-end text-xs ">Go Back</button>
                <Link to={"/products/" + product._id + "/edit"} className="bg-purple-400 p-2 text-white rounded hover:bg-purple-500 justify-self-end text-xs">Edit</Link>
                <button onClick={(e) => {deleteProduct(product._id)}} className="bg-purple-400 p-2 text-white rounded hover:bg-purple-500 justify-self-end text-xs">Delete</button>
            </div>
        </div>
        </>
    )
}

export default Detail
