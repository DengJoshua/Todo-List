import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
import Pagination from './components/Pagination'
import Spinner from './components/ui/Spinner'
import { paginate } from './utils/paginate'
import axios from 'axios';



class App extends Component {
    state = {
      todos: [],
      isloading: false,
      currentPage: 1,
      pageSize: 4
  }

       componentDidMount() {
         fetch('http://localhost:5000/api/listItems')
            .then(res => res.json())
            .then(data => this.setState({ todos: data }) )
            .then(() => this.setState({ isloading: true }))
      }



  handleCheck = async (todo) => {
    const newTodo = await axios.patch('http://localhost:5000/api/listItems' + '/' + todo._id, { completed: !todo.completed})
    
    const todos = [...this.state.todos]
    const index = todos.indexOf(todo)
    todos[index] = { ...newTodo }
    this.setState({ todos })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }

  handleDelete = async (todo) => {
      await axios.delete('http://localhost:5000/api/listItems' + '/' + todo._id )
      const todos = this.state.todos.filter(t => t._id !== todo._id)
      this.setState({ todos })  
  }
  

  render(){
    const todos = paginate(this.state.todos, this.state.pageSize, this.state.currentPage)
    
    return this.state.isloading === false  ?  (<React.Fragment><h1 style={{ textAlign: 'center',color: 'white' }}>
      MONGO TODO LIST</h1><Spinner /></React.Fragment>) : (
      <React.Fragment>
        <h1 style={{ textAlign: 'center',color: 'white' }} >MONGO TODO LIST</h1>
      <AddTodo />
      <Todos 
      handleDelete={this.handleDelete} todos={todos} 
      handleCheck={this.handleCheck}
      isloading={this.state.isloading}
      />
      <Pagination 
      currentPage={this.state.currentPage} 
      pageSize={this.state.pageSize} 
      itemsCount={this.state.todos.length} 
      handlePageChange={this.handlePageChange}
      />
      </React.Fragment>
    )
  }
}

export default App;