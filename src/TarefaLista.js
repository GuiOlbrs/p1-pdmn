import React from 'react'
const TarefaLista = ({tarefas}) => {
    return (
        tarefas.map((tarefa, i) =>(
        <div className='container' key={i}>
            <div className='col-sm-12 col-md-10 mx-auto border-black' style={{backgroundColor: '#FAFAD2'}}>
                <div className='row text-center'>
                    <div className='bg-white border p-4 mx-auto my-3 border-black rounded col-8'>{i + 1}- {tarefa}</div>
                </div>
            </div>
        </div>
        ))
    )
}
export default TarefaLista