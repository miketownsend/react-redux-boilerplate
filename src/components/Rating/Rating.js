import React from 'react'
import PropTypes from 'prop-types'

const Rating = (props) => {
  const width = 100 * ((props.stars || 2.5) / 5)
  const opacity = props.stars ? 1 : 0.25

  return <div className='rating'>
    <div className='rating__bottom'>
      <i className='fa fa-star-o' />
      <i className='fa fa-star-o' />
      <i className='fa fa-star-o' />
      <i className='fa fa-star-o' />
      <i className='fa fa-star-o' />
      <span className='rating__top' style={{ width: width + '%', opacity }}>
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
      </span>
    </div>
  </div>
}

Rating.propTypes = {
  stars: PropTypes.number
}

export default Rating
