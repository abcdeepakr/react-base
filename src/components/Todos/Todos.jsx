import React from 'react'
import { useFetch } from '../../hooks'
import { Link } from 'react-router-dom';

function Todos() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <>
            {data &&
                data.map((item) => {
                    return (
                    <Link to={`${item.id}`} key={item.id}>
                        {item.title}
                        <br></br>
                    </Link>);
                })}
        </>
    )
}

export default Todos