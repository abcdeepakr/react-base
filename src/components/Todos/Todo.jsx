import React from 'react'
import { useFetch } from '../../hooks'
import {  Link, useParams } from 'react-router-dom';

function Todo() {
    const {id} = useParams()
    const [data] = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return (
        <>
            {data ? <h1>{data.title}</h1> : "loading" }
        </>
    )
}

export default Todo