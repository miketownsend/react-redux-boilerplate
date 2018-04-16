import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getUser } from './selectors'
import { defaultAction } from './actions'

const mapDispatchToProps = {
  defaultAction: defaultAction
}

const mapStateToProps = (state, props) => {
  return {
    user: getUser(state)
  }
}

class /* @echo CAPITALIZED_NAME */ extends Component {
  static propTypes = {
    defaultAction: PropTypes.func.isRequired,
    user: PropTypes.object
  }

  componentWillMount () {
    this.props.defaultAction('user-1') // will trigger as soon as the component is loaded
  }

  render () {
    return <div className='/* @echo DASHERIZED_NAME */'>
      <p>Name: {this.props.user ? this.props.user.full_name : ''}</p>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(/* @echo CAPITALIZED_NAME */)
