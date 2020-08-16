import React, { Component } from 'react'

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"
                    className="form-control mt-3 mb-3 " 
                    onChange={this.props.onChange}
                    value={this.props.title}
                    name="title"
                    />
                    <button
                    className="btn btn-success btn-block mb-3 " 
                    onClick={this.props.addTodo}
                    >Add Todo</button>
                </form>
        </div>
        )
    }
}

export default AddTodo;