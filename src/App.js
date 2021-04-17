import React, {Component} from 'react'
import Form from'./components/Form'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="text-center font-weight-bold mt-3">To Do List</h1>
        <Form/>
      </div>
    )
  }
}
export default App;