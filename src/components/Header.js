import React from 'react';

export default function Header({title}) { // ou usar desustrutração com {title} ao invés de props, assim como dentro de h1, que ia propos.title
    return(
        <header>
            <h1>{title} </h1>

          
        </header>
    )
}