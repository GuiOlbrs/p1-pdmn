import React from 'react'
import TarefaEntrada from './TarefaEntrada'


const App = () => {
    return (
            <div className='container mt-4'>
                 <TarefaEntrada></TarefaEntrada>
                <div className='row'>
                    <div className='col-sm-12 col-md-10 mx-auto'>
                        <div className="card">
                            <h1 className='display-5 text-center'>
                                Hello, tarefas
                            </h1>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
export default App
