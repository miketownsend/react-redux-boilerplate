import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'

import { request, selectRequest } from '../../modules/request'
import Header from '../../components/Header'
import ShowsList from '../../components/ShowsList/ShowsList'

const RECENT_SHOWS_REQUEST_ID = 'ShowsContainer/RECENT_SHOWS'

const mapDispatchToProps = {
  sendRequest: request
}

const mapStateToProps = (state, props) => {
  return {
    response: selectRequest(state, RECENT_SHOWS_REQUEST_ID)
  }
}

class DashboardComponent extends React.Component {
  static propTypes = {
    sendRequest: PropTypes.func.isRequired,
    response: PropTypes.object
  }

  componentWillMount () {
    const existingResponse = this.props.response
    if (existingResponse && isToday(existingResponse.startedAt)) return

    const country = 'GB'
    this.props.sendRequest(RECENT_SHOWS_REQUEST_ID, {
      method: 'get',
      baseUrl: 'http://api.tvmaze.com/',
      endpoint: `schedule?country=${country}&date=${format(new Date(), 'YYYY-MM-DD')}`
    })
  }

  render () {
    const response = this.props.response
    const schedule = (response && response.data) ? response.data : []

    return <div className='page__content'>
      <Header>
        <h3>
          Example request to TV Show and web series database.<br />
          Create personalised schedules. Episode guide, cast, crew and character information.
        </h3>
        <br />
        <h2>Last Added Shows ({schedule.length})</h2>
      </Header>
      <ShowsList shows={schedule.map(s => s.show)} />
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
