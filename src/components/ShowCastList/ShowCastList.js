import React from 'react'
import PropTypes from 'prop-types'

import Image from '../Image'

const ShowCastListItem = (props) => {
  const image = props.role.person.image || {}
  const imageSrc = image.medium || image.original

  return <li key={props.role.person.id + props.role.character.id + ''}>
    <span className='show-detail__list-image'>
      <Image src={imageSrc} aspectRatio={1} boundedBy='width' />
    </span>
    <label className='show-detail__list-label'>
      {props.role.person.name}
    </label>
    <span className='show-detail__list-content'>
      {props.role.character.name}
    </span>
  </li>
}

ShowCastListItem.propTypes = {
  role: PropTypes.object.isRequired
}

const ShowCastList = (props) => {
  return <ul className='show-detail__list show-cast-list'>
    { props.cast.map(role => <ShowCastListItem role={role} />)}
  </ul>
}

ShowCastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object)
}

ShowCastList.defaultProps = {
  cast: []
}

export default ShowCastList
