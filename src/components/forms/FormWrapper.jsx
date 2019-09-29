import React from 'react'

const FormWrapper = ({classNames = "", style = {}, children}) => {
  return (
    <form className={`form ${classNames}`} style={style}>
      {children}
    </form>
  )
}

export default FormWrapper
