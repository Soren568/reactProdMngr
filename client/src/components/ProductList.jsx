import React from 'react'
import { useHistory } from 'react-router';

const ProductList = (props) => {
    const history = useHistory();

    return (
        <div>
            <h1 className="text-lg mb-4 font-mono font-extrabold text-purple-500">All products</h1>
            <ul className="list-decimal text-purple-900">
                {props.products.map((prod, i) => {
                    return(
                        <li key={i} className="text-left pl-4 hover:underline cursor-pointer" onClick={e => {history.push('/products/' + prod._id)}}> {prod.title}, ${prod.price} </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductList
