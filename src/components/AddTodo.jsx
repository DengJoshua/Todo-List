import React, { Component } from 'react'
import axios from 'axios';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:''
        }
        this.onChange = this.onChange.bind(this)
        this.AddTodo = this.AddTodo.bind(this)
    }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    AddTodo = (e) => {

        const todo = {
            title: this.state.title
        }

        axios.post('http://localhost:5000/api/listItems', todo)
        .then(data => this.setState({ title: data }))
        .catch(err => console.log(err))
    }
 


    render() {
        return (
            <div>
                <form>
                    <input type="text"
                    className="form-control mt-3 mb-3 " 
                    onChange={this.onChange}
                    value={this.state.title}
                    name="title"
                    />
                    <button
                    className="btn btn-success btn-block mb-3 " 
                    onClick={this.AddTodo}
                    >Add Post</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;