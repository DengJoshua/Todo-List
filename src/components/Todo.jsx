import React, { Component } from 'react'

class Todo extends Component {
    getStyle = () => {
        return {
           textDecoration: this.props.todo.completed === true ? "line-through": 'none',
           background: this.props.todo.completed === true ? "#888" : ''
        }
    }
    getCheckStyle = () => {
        return {
           textDecoration: 'none',
           opacity: this.props.todo.completed === true ? "100%": '0'
        }
    }
    
    getListStyle = () => {
        return {
           background: this.props.todo.completed === true ? "#888" : ''
        }
    }

    render() {
        const todo = this.props.todo;
        return (
                <li className="list-group-item "  style={this.getListStyle()}
                onClick={this.props.handleCheck.bind(this, todo)}
                >
                    <span className="check m-2" style={this.getCheckStyle()} >&#10003;</span>
                    <span style={this.getStyle()} >{ todo.title }</span>
                    <button 
                    className="btn btn-danger btn-sm float-right"
                    onClick={this.props.handleDelete.bind(this, todo)}
                    >x</button>
                </li>
        )
    }
}

export default Todo;