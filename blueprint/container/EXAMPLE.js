import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { request, selectRequest } from '../../modules/request'

const REQUEST_ID = '/* @echo NAME *//SHOW'

const mapDispatchToProps = {
  sendRequest: request
}

const mapStateToProps = (state, props) => {
  return {
    response: selectRequest(state, REQUEST_ID),
    id: props.params.id || 1
  }
}

class /* @echo NAME */ extends React.Component {
  static propTypes = {
    sendRequest: PropTypes.func.isRequired,
    response: PropTypes.object,
    id: PropTypes.string
  }

  componentWillMount () {
    this.props.sendRequest(REQUEST_ID, {
      method: 'get',
      baseUrl: 'http://api.tvmaze.com/',
      endpoint: `shows/${this.props.id}`
    })
  }

  render () {
    const response = this.props.response
    const data = (response && response.data) ? response.data : null
    if (!data) return <div />

    return <div className='/* @echo DASHERIZED_NAME */'>
      <pre>
        { JSON.stringify(data, null, '  ') }
      </pre>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(/* @echo NAME */)
