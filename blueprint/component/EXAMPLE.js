import React from 'react'
import PropTypes from 'prop-types'

const /* @echo NAME */ = (props) => {
  return <div className=${`/* @echo DASHERIZED_NAME */ ${props.className}`}>
    <h1>{props.username}</h1>
    <div>
      {props.children}
    </div>
  </div>
}

/* @echo NAME */.propTypes = {
  username: PropTypes.string.isRequired
}

/* @echo NAME */.defaultProps = {
  username: ''
}

export default /* @echo NAME */
