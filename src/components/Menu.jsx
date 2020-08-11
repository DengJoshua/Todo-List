import React, { Component } from 'react'


class Menu extends Component {
    render() {
        return (
            <div>
                    <ul className="nav bg-secondary">
                        <li className="nav-item" ><span className="nav-link" >Todos</span></li>
                        <li className="nav-item" ><span className="nav-link active" >Help</span></li>
                    </ul>
            </div>
        )
    }
}

export default Menu;