import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
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
            <button onClick={goBack} className="bg-purple-400 p-2 text-white rounded hover:text-purple-100 justify-self-end w-full mt-6">Go Back</button>
        </div>
        </>
    )
}

export default Detail
