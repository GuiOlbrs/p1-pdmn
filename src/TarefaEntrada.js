import React, { Component } from 'react'

export default class 
 extends Component {


    render() {
      return (
          <div className='container mt-4 mb-4'> 
              <div className='row'>
                <div className='col-sm-12 col-md-10 mx-auto'>
                  <input type="text"
                    className="form-control p-4 text-center"  
                    placeholder='Digite a descrição de uma nova tarefa'/>
                  </div>
              </div>
              <div className='row'>
                <div className='col-sm-12 col-md-10 mx-auto'>
                  <button type="button" 
                    className="btn btn-outline-primary col-12 mt-2 p-4">
                      OK
                  </button>
                </div>
              </div>
          </div>
      )
  }
}
