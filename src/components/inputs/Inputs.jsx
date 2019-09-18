import React from 'react'
import './inputs.scss'

export const MainInput = ({placeholder, className="", value, onChange, type, name}) => {
  return (
    <input placeholder={placeholder} className={`form-input ${className}`} value={value} name={name} onChange={onChange} type={type} />
  )
}

