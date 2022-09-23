import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Helmet = props => {
    document.title = 'Yema -' + props.title

    useEffect (() => { 
        window.scrollTo(0, 0)
    }, [])
    
  return (
    <div
      data-aos='zoom-in-up' 
      data-aos-duration="800"
      >
        {props.children}
    </div>
  )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet