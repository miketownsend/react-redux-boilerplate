import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import format from 'date-fns/format'

import { request, selectRequest } from '../../modules/request'
import PageHeader from '../../components/Header'
import ShowDetailHeader from '../../components/ShowDetailHeader'
import ShowCastList from '../../components/ShowCastList/ShowCastList'

const RECENT_SHOWS_REQUEST_ID = 'ShowDetail/SHOW'

const mapDispatchToProps = {
  sendRequest: request
}

const mapStateToProps = (state, props) => {
  return {
    showId: props.params.showId,
    response: selectRequest(state, RECENT_SHOWS_REQUEST_ID)
  }
}

class ShowDetail extends React.Component {
  static propTypes = {
    sendRequest: PropTypes.func.isRequired,
    response: PropTypes.object,
    showId: PropTypes.string.isRequired
  }

  componentWillMount () {
    this.props.sendRequest(RECENT_SHOWS_REQUEST_ID, {
      method: 'get',
      baseUrl: 'http://api.tvmaze.com/',
      endpoint: `shows/${this.props.showId}?embed=cast`
    })
  }

  render () {
    const response = this.props.response
    const show = (response && response.data) ? response.data : null
    if (!show) return <div />

    const channel = show.webChannel || show.network || {}
    return <div className='page__content'>
      <PageHeader>
        <ShowDetailHeader show={show} />
      </PageHeader>
      <main className='page__main show-detail__main'>
        <div className='page__columns'>
          <div className='page__column'>
            <h2>Show Info</h2>
            <ul className='show-detail__list show-detail__list--details'>
              <li>
                <label className={'show-detail__list-label'}>Streamed On</label>
                <span className={'show-detail__list-content'}>{channel.name}</span>
              </li>
              <li>
                <label className={'show-detail__list-label'}>Schedule</label>
                <span className={'show-detail__list-content'}>{show.schedule.days.join(', ')}</span>
              </li>
              <li>
                <label className={'show-detail__list-label'}>Status</label>
                <span className={'show-detail__list-content'}>{show.status}</span>
              </li>
              <li>
                <label className={'show-detail__list-label'}>Genre</label>
                <span className={'show-detail__list-content'}>{show.genres.join(', ')}</span>
              </li>
            </ul>
          </div>
          <div className='page__column'>
            <h2>Starring</h2>
            <ShowCastList cast={show._embedded ? show._embedded.cast : null} />
          </div>
        </div>
      </main>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail)
