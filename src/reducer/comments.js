import {  } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

export default (state = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return state
}