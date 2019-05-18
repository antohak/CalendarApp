const initState = {
    authError: null,
    isLoggedIn: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login_failed')
            return {
                ...state,
                isLoggedIn: false,
                authError: 'Invalid email or password'
            }
        case 'LOGIN_SUCCESS': 
            console.log('login_success')
            return {
                ...state,
                isLoggedIn: true,
                authError: null
            }
        case 'SIGNUP_ERROR': 
            console.log('signup_failed')
            return {
                ...state,
                isLoggedIn: false,
                authError: action.error.message
            } 
        case 'SIGNUP_SUCCESS': 
            console.log('signup_success')
            return {
                ...state,
                authError: null
            }                         
        case 'LOGOUT_SUCCESS': 
            console.log('logout_success')
            return {
                ...state,
                isLoggedIn: false
            }
                   
        default:
            return state

        
    }
}

export default authReducer