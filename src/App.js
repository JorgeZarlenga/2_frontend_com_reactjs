// Arquivo principal

import React, {useState, useEffect} from 'react'; // useEffect dispara funções ao passo da alteração de informações
import api from './services/api';

import './App.css';
//import backgroundImage from './assets/background.jpg';

import Header from './components/Header';   

/*
    - Componente
    - Propriedade: Alguma propriedade que se passa do componente pai para o filho
    - Estado & Imutabilidade (garante performance mesmo com muitos dados - não se pode alterar diretamente as variáveis, apenas recriar)
    // Método push não respeita imutabilidade (evitar no react)
*/


function App()
{

    const [projects, setProjects] = useState([]); // ou 'Desenvolvimento de app', 'Front-end web' - estático

    useEffect(() => {                // 2 parâmetros (qual função disparar e o segundo é quando disparar)
                                    // array de dependências
        api.get('/projects').then(response => {
            setProjects(response.data);
        }); // ou só projects
    }, []);                      

    //useState retorna um array com 2 posições:

    //1 - Variável com seu valor inicial
    //2 - Função para atualizar esse valor

    function handleAddProject()
    {
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, `Novo projeto ${Date.now()}`]); // Spread operator que copia o que há em projects

        console.log(projects);
    }

    // ou usar tag vazia:
    return (
        <>
          
            <Header title="Projects" />   

            <ul>
                {projects.map(project => <li key = {project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );

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

    
    
}

export default App;