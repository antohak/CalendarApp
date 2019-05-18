import React, { Component } from 'react'
import { connect } from 'react-redux'   
import { closeModal } from '../store/actions/modalActions'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Login from './Login'
import Signup from './Signup'
import '../Modal.css'; 

class Modal extends Component {
    
    renderLogin() {
        return ( <Login /> )
    }

    renderSignup() {
        return ( <Signup /> )
    }
    
    render() {
        return (
            <Dialog
                open={this.props.modal.modalIsOpen}
                onClose={this.props.closeModal}
                children="">  
                <DialogTitle children="">{this.props.mode === 'login' ? 'Login' : 'Sign Up'}</DialogTitle>
                <DialogContent className="modal-content" children="">
                    { this.props.mode === 'login' &&
                        this.renderLogin()
                    }
                    { this.props.mode === 'signup' &&
                        this.renderSignup()
                    }
                </DialogContent>
            </Dialog>
        )
    }
}   

const mapStateToProps = ({ modal }) => ({ modal })

export default connect(mapStateToProps, { closeModal })(Modal)