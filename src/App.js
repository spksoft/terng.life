import React from 'react'
import { Router } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

// @todo #1:30min setup global css
css.global('html, body', tw('font-demo-serif font-light text-base m-0 p-0'))
css.global('a', tw('no-underline text-demo-color font-bold'))
const Content = glamorous.div(tw('p-4'))

// @todo #1:30min add rematch store
const App = () => (
  <Router>
    <div>
      <Content>
        <Routes />
      </Content>
    </div>
  </Router>
)

export default hot(module)(App)
