import React from 'react'
import { withSiteData } from 'react-static'
import HomeComponent from '../components/Home'

export default withSiteData(() => (
  <div>
    <head>
      <title>Terng life is all about my life</title>
    </head>
    <HomeComponent />
  </div>
))
