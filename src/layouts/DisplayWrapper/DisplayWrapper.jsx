import React from 'react'
import Header from '../Header/Header'
import './DisplayWrapper.scss'

const DisplayWrapper = ({classNames = "", header, children, style}) => {
  return (
    <div className={`display-wrapper `} >
      {header &&
        <Header/>
      }

      <div className={`${classNames}`} style={style}>
        {children}
      </div>
    </div>
  )
}

export default DisplayWrapper
