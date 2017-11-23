import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }

    handleChange = ev => {
        const {value} = ev.target
        this.setState({
            user: value.length < 15 ? value : ''
        })
    }

    render() {
        console.log('---', this.state)
        return (
            <div>
                Username: <input value = {this.state.user} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default UserForm