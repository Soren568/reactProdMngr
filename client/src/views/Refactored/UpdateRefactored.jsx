import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import DeleteButton from '../../components/Refactored/DeleteButton';
import ProductFormRefactored from '../../components/Refactored/ProductFormRefactored';

export default props => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false)
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data.product)
                setProduct(res.data.product)
                setLoaded(true);
                // setTitle(res.data.product.title);
                // setPrice(res.data.product.price);
                // setDescription(res.data.product.description);
            })
    }, []);
    
    const updateProduct = e => {
        axios.put('http://localhost:8000/api/products/' + id, product)
        .then(res => console.log(res), history.push('/'))
        .catch(err => console.error(err));
    }

    return ( 
        loaded && (
            <>
                <ProductFormRefactored onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} button={"Update"}/>
                <span className="bg-purple-400 px-2 py-1 text-white rounded hover:text-red-100 text-xs ml-2 flex items-center max-h-4 mt-5">
                    <DeleteButton productId={product._id} successCallback={()=> history.push('/')}/>
                </span>
            </>
        )
    )
}


