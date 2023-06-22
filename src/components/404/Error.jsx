import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>page not found</h1>
        <Link to={`/`}>home</Link>
    </div>
  )
}

export default Error