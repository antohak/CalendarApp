import React, { Component}  from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { closeModal } from '../store/actions/modalActions'
import { signup } from '../store/actions/authActions'
import '../Form.css'

class Signup extends Component {
    state = {
        email : '',
        password : '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
        this.props.closeModal()
    }

    render(){
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
                    margin="normal"
                    onChange={this.handleChange}
                />
                <TextField
                    label="First Name"
                    id="firstName"
                    className="textfield"
                    type="text"
                    margin="normal"
                    onChange={this.handleChange}
                />
                <TextField
                    label="Last Name"
                    id="lastName"
                    className="textfield"
                    type="text"
                    margin="normal"
                    onChange={this.handleChange}
                />
                <TextField
                    label="Password"
                    id="password"
                    className="textfield"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange}
                /> 
                <TextField
                    label="Confirm Password"
                    className="textfield"
                    type="password"
                    margin="normal"
                /> 
                <Button className="form-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                    Sign Up
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (newUser) => dispatch(signup(newUser)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)