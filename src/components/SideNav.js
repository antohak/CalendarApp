import React, { Component}  from 'react'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import '../Sidenav.css'

class SideNav extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {  
        return (
            <div className='list-container'>
                <div className='list'>
                    <div className='list-item'>
                        <div className='list-item-image'></div>
                        <div className='list-item-name'><span>Calendar 1</span></div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item-image'></div>
                        <div className='list-item-name'><span>Calendar 1</span></div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item-image'></div>
                        <div className='list-item-name'><span>Calendar 1</span></div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item-image'></div>
                        <div className='list-item-name'><span>Calendar 1</span></div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item-image'></div>
                        <div className='list-item-name'><span>Calendar 1</span></div>
                    </div>
                    <div className='list-item'>
                        <div className='list-item-image'></div>
                        <div className='list-item-name'><span>Calendar 1</span></div>
                    </div>
                </div>
                <div className='grow'></div>
                <div className='list-footer'>
                    <svg class="svg-icon" viewBox="0 0 20 20">
					    <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
					</svg>
                </div>
            </div>
        )
    }
}

export default SideNav 