import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LoginLinks from './LoginLinks'
import LogoutLinks from './LogoutLinks'
import { connect } from 'react-redux'
import { openModal } from '../store/actions/modalActions'
import { logout } from '../store/actions/authActions'
import Modal from './Modal'
import '../Navbar.css'

class NavBar extends React.Component {

  state = {
    mode: ''
  }

  handleMode(mode) {
    this.setState({ mode: mode }, () => {
      this.props.openModal()
    })
  }

  render() {
    const { auth } = this.props

    const links = auth.uid ? <LoginLinks handleMode={this.handleMode.bind(this)} /> : <LogoutLinks handleMode={this.handleMode.bind(this)} />
    return (
      <div className="root">
        <AppBar position="fixed" >
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className="grow">
              Calendar
            </Typography>
            <div className="grow"></div>
            <div className="authButtons">
              { links }
            </div>
            <Modal mode={this.state.mode} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}  

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)