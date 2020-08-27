// Arquivo principal

import React from 'react';

import Header from './components/Header';   

function App()
{
    //return <h1>Hello GoStack</h1>;

    // É preciso no react ter algo em volta para repetição (colocar div)
    /*
    return (
        <div>
            <Header />
            <Header />
        </div>
    );
    */

    // ou usar tag vazia:
    return (
        <>
            <Header />
            <Header />
        </>
    );
    
}

export default App;