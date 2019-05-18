import React from 'react'
import Button from '@material-ui/core/Button'

const LogoutLinks = (props) => {
    return (
        <div>
            <Button color="inherit" onClick={() => props.handleMode('signup')}>
                Sign up
            </Button>
            <Button color="inherit" onClick={() => props.handleMode('login')}>
                Login
            </Button>
        </div>
    )
}

export default LogoutLinks