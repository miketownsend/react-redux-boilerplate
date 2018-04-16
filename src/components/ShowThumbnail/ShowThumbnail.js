import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import Rating from '../Rating'

import Image from '../Image'

class ShowThumbnail extends Component {
  static propTypes = {
    enter: PropTypes.number,
    show: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { in: false }
  }

  componentDidMount () {
    this.timer = setTimeout(function () {
      this.setState({ in: true })
    }.bind(this), this.props.enter || 0)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    const show = this.props.show

    const imageSrc = show.image ? (show.image.medium || show.image.large || show.image.original) : ''

    return <Link className={`show-thumbnail${this.state.in ? ' in' : ''}`} to={`/shows/${show.id}`}>
      <Image src={imageSrc} aspectRatio={1.4} className='show-thumbnail__image' />
      <Rating stars={show.rating.average} />
      <label>{show.name}</label>
    </Link>
  }
}

export default ShowThumbnail
