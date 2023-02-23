import {createStore} from 'redux'

const initial = {
    current: 'red',
    board: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]
}

function reducer(state, action) {
    if(action.type === "DROP_TILE") {
        console.log('asdsad' + action.payload)
    }

    return state;
}

export default createStore(reducer, initial)