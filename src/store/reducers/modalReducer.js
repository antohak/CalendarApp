import {OPEN_MODAL, CLOSE_MODAL } from '../constants/modalConstants'

const INITIAL_STATE = {
    modalIsOpen: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MODAL: 
            return { modalIsOpen: action.payload }
        case CLOSE_MODAL:
            return { modalIsOpen: action.payload } 
        default: 
            return state
    }
}