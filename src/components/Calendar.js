import React from 'react'
import '../Calendar.css'

var moment = require('moment')

class Calendar extends React.Component {
  
  generate() {
    let currDay = moment().format('D')
    let daysInMonth = moment().daysInMonth()
    let items = []

    for(var i = 1; i <= daysInMonth; i++) {
      if(i == currDay)
        items.push(<div className="grid-item grid-item-current-day">{i}</div>)
      else
        items.push(<div className="grid-item">{i}</div>) 
    }

    return(items)
  }   

  render() {       
      return (
        <div className="grid-container">
          <div className="grid-header">
            <span>{moment().format('MMMM')} {moment().format('YYYY')}</span>
          </div>
          <div className="grid">
            { this.generate() }
          </div>
        </div>
      )
    }
  }

  export default Calendar