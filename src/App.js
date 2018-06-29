import React from 'react'
import { Router } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

// @todo #1:30min setup global css
css.global('html, body', tw('font-demo-serif font-light text-base m-0 p-0 min-h-full '))
css.global('a', tw('no-underline text-demo-color font-bold'))

// @todo #1:30min add rematch store
const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
