import React from 'react'
import '../styles/core.scss'

export const PageLayout = (props) => {
  return <div className='page'>
    {props.children}
  </div>
}

export default PageLayout
