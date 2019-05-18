import React from 'react'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import Calendar from './components/Calendar'
import { BrowserRouter, Switch, Router } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <SideNav />
          <Calendar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
