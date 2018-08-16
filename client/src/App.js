import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Paragraph from './components/Paragraph/Paragraph'
import Box from './components/Box/Box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Paragraph />
        <Box />
      </div>
    )
  }
}

const mapDispatchToProps = {}

const mapStateToProps = state => ({
  main: state.main
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
