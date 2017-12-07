import {OrderedMap} from 'immutable'

export function arrToMap(arr) {
    return arr.reduce((acc, item) => ({
        ...acc,
        [item.id]: item
    }), {})
}

export function arrToImmutableMap(arr, RecordModel) {
    return arr.reduce((acc, item) => acc.set(item.id, RecordModel ? new RecordModel(item) : item), new OrderedMap())
}