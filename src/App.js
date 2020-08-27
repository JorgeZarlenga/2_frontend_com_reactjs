// Arquivo principal

import React from 'react';

import Header from './components/Header';   

/*
    - Componente
    - Propriedade: Alguma propriedade que se passa do componente pai para o filho
    - Estado

*/


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
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
    
}

export default App;