import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Pagination from './components/Pagination';
import Spinner from './components/ui/Spinner';
import { paginate } from './utils/paginate';
import axios from 'axios';
import AddTodo from './components/AddTodo';


class App extends Component {
    state = {
      todos: [],
      isloading: false,
      currentPage: 1,
      pageSize: 4,
      title: '' 
  }

      componentDidMount() {
        fetch('http://localhost:5000/api/listItems')
          .then(res => res.json())
          .then(data => this.setState({ todos: data }) )
          .then(() => this.setState({ isloading: true }))
    }



  handleCheck = async (todo) => {
     await axios.patch('http://localhost:5000/api/listItems' + '/' + todo._id, { completed: !todo.completed})

    const todos = [...this.state.todos];
    const index = todos.indexOf(todo)
    todos[index] = { ...todos[index] }
    todos[index].completed = !todos[index].completed
    this.setState({ todos })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }

  handleDelete = async (todo) => {
      await axios.delete('http://localhost:5000/api/listItems' + '/' + todo._id )
      const todos = this.state.todos.filter(t => t._id !== todo._id)
      this.setState({ todos })  

      if(this.state.todos.length <= 4 ){
        this.setState({ currentPage: 1 })
      }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  addTodo = async (e) => {
     e.preventDefault();
      
      const todo = {
          title: this.state.title
      }

      await axios.post('http://localhost:5000/api/listItems', todo)

      fetch('http://localhost:5000/api/listItems')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }) )
      .then(this.setState({ title: '' }))
  }


  render(){
    const todos = paginate(this.state.todos, this.state.pageSize, this.state.currentPage)
    
    return this.state.isloading === false  ?  (<React.Fragment><h1 style={{ textAlign: 'center',color: 'white' }}>
      MONGO TODO LIST</h1><Spinner /></React.Fragment>) : (
      <div className="container">
        <h1 style={{ textAlign: 'center',color: 'white' }} >MONGO TODO LIST</h1>
      
      <AddTodo
        addTodo={this.addTodo}
        onChange={this.onChange}
        title={this.state.title}
        />

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
      </div>
    )
  }
}

export default App;