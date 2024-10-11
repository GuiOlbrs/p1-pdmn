import React, { Component } from 'react'

export default class extends Component {

  state = {

    termoDeBusca: ''
  }

  onTermoAlterado = (evento) =>{
    this.setState({termoDeBusca: evento.target.value})
  }

  OnFormSubmit = () =>{
    this.props.onTarefaCadastrada(this.state.termoDeBusca)
    this.setState({ termoDeBusca: '' })
    
  }

    render() {
      return (
          <div className='container mt-4 mb-4'> 
              <div className='row'>
                <div className='col-sm-12 col-md-10 mx-auto'>
                  <input type="text"
                    className="form-control p-4 text-center"  
                    onChange={this.onTermoAlterado}
                    value={this.state.termoDeBusca}
                    placeholder='Digite a descrição de uma nova tarefa'/>
                  </div>
              </div>
              <div className='row'>
                <div className='col-sm-12 col-md-10 mx-auto'>
                  <button type="button" 
                    className="btn btn-outline-primary col-12 mt-2 p-4"
                    onClick={this.OnFormSubmit}>
                      OK
                  </button>
                </div>
              </div>
          </div>
      )
  }
}
