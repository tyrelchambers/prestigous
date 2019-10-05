import React from 'react'
import './inputs.scss'

export const MainInput = ({placeholder, className="", value, onChange, type, name}) => {
  return (
    <input placeholder={placeholder} className={`form-input ${className}`} value={value} name={name} onChange={onChange} type={type} />
  )
}

export const Checkbox = ({type, name, value, text}) => {
  return (
    <div className="d-f ai-c">
      <input type={type} value={value} name={name}/>
      <p className="subtitle ml-">{text}</p>
    </div>
  )
}