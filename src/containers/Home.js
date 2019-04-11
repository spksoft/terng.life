import React from 'react'
import { withSiteData } from 'react-static'
import Parser from 'rss-parser'
import HomeComponent from '../components/Home'

const withMediumFeedData = Component =>
  class extends React.Component {
    state = {
      loading: true,
      data: undefined,
    }
    async componentDidMount () {
      this.setState(() => ({
        loading: true,
      }))
      const parser = new Parser()
      const feed = await parser.parseURL(
        'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@sippakornraksakiart'
      )
      this.setState(() => ({
        loading: false,
        data: feed,
      }))
    }
    render () {
      const { loading, data } = this.state
      if (loading) {
        return <div>Loading</div>
      } else if (!loading && !data) {
        return <div>Something went wrong!</div>
      }
      return <Component mediumFeedData={data} {...this.props} />
    }
  }

export default withSiteData(
  withMediumFeedData(({ mediumFeedData }) => (
    <div>
      <head>
        <title>Terng life is all about my life !!!</title>
      </head>
      <HomeComponent mediumFeedData={mediumFeedData} />
    </div>
  ))
)
