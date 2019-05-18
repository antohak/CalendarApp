import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    modal: modalReducer
})

export default rootReducer