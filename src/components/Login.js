import React, { Component}  from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { closeModal } from '../store/actions/modalActions'
import { login } from '../store/actions/authActions'
import '../Form.css'



class Login extends Component {
    state = {
        email : '',
        password : ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.props.closeModal()
    }

    render() {
        const { authError } = this.props
        return (
            <div className="form-content">
                <Typography variant="h6" color="error" className="error-message">
                    { authError ? <span>{authError}</span> : null }
                </Typography>
                <TextField
                    autoFocus
                    id="email"
                    label="Email"
                    className="textfield"
                    type="email"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    className="textfield"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange}
                /> 
                <Button className="form-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                    Login
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)