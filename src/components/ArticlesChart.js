import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //do some stuff with d3 in this.refs.container
    }

    componentWillReceiveProps() {
        //update this.refs.container with new props
    }

    render() {
        return <div ref = 'container' />
    }
}

export default ArticlesChart