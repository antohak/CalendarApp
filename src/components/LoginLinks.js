import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authActions'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const LoginLinks = (props) => {
    return (
        <div>
            <Button color="inherit" onClick={() => props.logout()}>
                Logout
            </Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoginLinks)