import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'


const App = () => {
    return (
            <div className='container mt-4'>
                <div className='row'>
                    <TarefaEntrada></TarefaEntrada>
                </div>
                <div className='row'>
                    <TarefaLista></TarefaLista>
                </div>
            </div>   
        )
    }
export default App
