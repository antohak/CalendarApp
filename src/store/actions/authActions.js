import { firestore } from "firebase";

export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error})
        })
    }
}

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}

export const signup = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            console.log(response)
        })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error})
        })
    }
}