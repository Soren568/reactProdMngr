import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default props => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp, button} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
        <div >
            <form className="w-full max-w-sm  bg-gray-50 rounded p-2 border-2 border-purple-50 border-double mt-5" onSubmit={handleSubmit}>
                <h1 className=" font-extrabold font-mono text-xl text-purple-800 mb-6">Enter a product</h1>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label htmlFor="title" className="block text-purple-700 md:text-right mb-1 md:mb-0 pr-4">Title</label>
                    </div>
                    <div className="md:w-2/3">
                        <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" name="title" id="" className="bg-gray-200 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-purple-50 focus:border-purple-200" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label htmlFor="" className="block text-purple-700 md:text-right mb-1 md:mb-0 pr-4">Price</label>
                    </div>
                    <div className="md:w-2/3">
                        <input value={price} onChange={(e) => {setPrice(e.target.value)}} type="number" name="price" id="" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-purple-50 focus:border-purple-200" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label htmlFor="" className="block text-purple-700 md:text-right mb-1 md:mb-0 pr-4">Description</label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} name="description" id="" cols="20" rows="1" placeholder="" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-purple-50 focus:border-purple-200"></textarea>
                    </div>
                </div>
                <div className="form-input-group-right">
                    <button className="shadow bg-purple-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded focus:ring-2 focus:ring-purple-500" type="submit">
                        {button}
                    </button>
                </div>
            </form>
        </div>
    )
}



