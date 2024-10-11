import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

export default class App extends React.Component {
    
    state ={
        tarefas:[]
    }

    onTarefaCadastrada = async (tarefa) => {

        if (tarefa !== ""){
            this.setState({tarefas:[...this.state.tarefas,tarefa]})
        }
    }

    render(){         
        return (
            <div className='container mt-4'>
                <div className='row'>
                    <TarefaEntrada onTarefaCadastrada={this.onTarefaCadastrada}/>
                </div>
                <div className='row'>
                    <TarefaLista tarefas={this.state.tarefas}/>
                </div>
            </div>   
        )}  
}

