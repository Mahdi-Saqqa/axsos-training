import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useParams } from 'react-router-dom';

export const ProductForm = () => {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res => {
            console.log(res)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)}
            )
        .catch(err => console.log(err))}
            
            ,[])
    const createProduct = () => {
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                setTitle("")
                setPrice("")
                setDescription("")
                navigate("/");

            })
            .catch(err => {
                console.log(err.response.data.error)
                setErrors(err.response.data)
                console.log(errors)

            })}
    const updateProduct = () => {
        axios.put('http://localhost:8000/api/product/'+id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                setTitle("")
                setPrice("")
                setDescription("")
                navigate("/product/"+id);
            })
            .catch(err => {
                console.log(err.response.data.error)
                setErrors(err.response.data)
                console.log(errors)

            })
    }


    const onSubmitHandler = e => {
        e.preventDefault();
        if (id) {
            updateProduct();

        }
        else {
            createProduct();
        }
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={e => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
            </p>
            <div>
                <p>
                    {errors.error ? errors.error : ""}
                </p>
            </div>
            <input type="submit" />

        </form>
    )
}
