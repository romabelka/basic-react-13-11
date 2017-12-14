import React from 'react'
import {NavLink} from 'react-router-dom'

function MenuItem(props) {
    return (
        <div>
            <NavLink to={props.url} activeStyle={{color: 'red'}}>{props.children}</NavLink>
        </div>
    )
}

MenuItem.propTypes = {
}

export default MenuItem