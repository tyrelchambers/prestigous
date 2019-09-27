import React from 'react'
import './buttons.scss'
export const SubmitButton = ({text, onClick, icon}) => {
  return (
    <button type="submit" onClick={onClick} className={`btn btn-primary`}>{icon} {text}</button>
  )
}

export const DashButton = ({text, onClick, icon}) => {
  return (
    <button type="button" className="btn btn-secondary" onClick={onClick}>{icon} {text}</button>
  )
}