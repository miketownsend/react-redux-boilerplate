import React from 'react'
import PropTypes from 'prop-types'
import reactRenderHtml from 'react-render-html'

import Image from '../Image'
import Rating from '../Rating'

const ShowDetailHeader = ({ show }) => {
  return <div className='show-detail-header'>
    <div className='show-detail-header__image-wrapper'>
      <Image src={show.image ? show.image.medium : ''} aspectRatio={1.4} />
    </div>
    <div className='show-detail-header__title-block'>
      <Rating stars={show.rating.average} />
      <h1>{show.name}</h1>
      {reactRenderHtml(show.summary)}
    </div>
  </div>
}

ShowDetailHeader.propTypes = {
  show: PropTypes.string.isRequired
}

export default ShowDetailHeader
