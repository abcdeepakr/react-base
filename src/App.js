import React from "react";
import { Link } from "react-router-dom";

const App = () =>{
    return (
        <nav>
          <ul>
            <li>
              <Link to={`todos`}>Todos</Link>
            </li>
            <li>
              <Link to={`photos`}>Photos</Link>
            </li>
            <li>
              <Link to={`users`}>Users</Link>
            </li>
            <li>
              <Link to={`dhtmlx-grid`}>DHTMLX</Link>
            </li>
          </ul>
        </nav>
    )
}

export default App