import React, { Component } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Main menu:</h2>
                {this.props.children}
            </div>
        )
    }
}

export {MenuItem}
export default Menu