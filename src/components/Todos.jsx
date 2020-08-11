import React, { Component } from 'react'
import Todo from './Todo'


class Todos extends Component {

    render() {
        return (
        <React.Fragment>
            <ul>
            {
                this.props.todos.map(todo => (
                    <Todo todo={todo} handleDelete={this.props.handleDelete}
                    handleCheck={this.props.handleCheck}
                    key={todo._id}
                    id={todo._id}
                    />
                ))
            }
            </ul>
        </React.Fragment>
        )
    }
}

export default Todos;