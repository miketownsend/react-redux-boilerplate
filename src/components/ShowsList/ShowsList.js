import React from 'react'
import PropTypes from 'prop-types'

import ShowThumbnail from '../ShowThumbnail'

const ShowsList = (props) => {
  return <main className='page__main shows-list'>
    <ul className='shows-list__list'>
      {
        props.shows.map((show, i) => {
          return <li key={i}>
            <ShowThumbnail show={show} enter={i * 100} />
          </li>
        })
      }
    </ul>
  </main>
}

ShowsList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object)
}

export default ShowsList
