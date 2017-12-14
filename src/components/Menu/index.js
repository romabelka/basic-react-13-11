import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'

//console.log('---', React.Fragment)
class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Fragment>
                <h2>Main menu:</h2>
                {this.props.children}
            </Fragment>
        )
    }
}

export {MenuItem}
export default Menu