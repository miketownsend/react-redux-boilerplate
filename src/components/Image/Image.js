import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResponsiveImage extends Component {
  constructor (props) {
    super(props)
    this.state = { imageStatus: 'loading' }
  }

  handleImageLoaded () {
    this.setState({ imageStatus: 'loaded' })
  }

  handleImageErrored () {
    this.setState({ imageStatus: 'error' })
  }

  render () {
    const status = this.state.imageStatus
    let iconClass
    switch (status) {
      case 'loading':
        iconClass = 'fa-image'
        break

      case 'error':
        iconClass = 'fa-exclamation-triangle'
        break
    }

    const { src, boundedBy, className, aspectRatio } = this.props
    const paddingTop = (aspectRatio * 100) + '%'

    return <div className={`image image-${boundedBy} ${className}`} style={{ paddingTop }}>
      <img src={src} />
      { iconClass ? <i className={'fa ' + iconClass} /> : null }
    </div>
  }
}

ResponsiveImage.propTypes = {
  src: PropTypes.string,
  boundedBy: PropTypes.string,
  aspectRatio: PropTypes.number
}

ResponsiveImage.defaultProps = {
  aspectRatio: 1,
  boundedBy: 'height'
}

export default ResponsiveImage
