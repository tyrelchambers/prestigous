import React from 'react'
import './buttons.scss'
export const SubmitButton = ({text, onClick, icon}) => {
  return (
    <button type="submit" onClick={onClick} className={`btn btn-primary`}>{text} {icon}</button>
  )
}

