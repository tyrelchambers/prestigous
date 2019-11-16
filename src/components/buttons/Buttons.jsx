import React from 'react'
import './buttons.scss'
export const SubmitButton = ({text, onClick, icon, classNames}) => {
  return (
    <button type="submit" onClick={onClick} className={`btn btn-primary ${classNames ? classNames : ""}`}>{icon} {text} </button>
  )
}

export const DashButton = ({text, onClick, icon, classNames}) => {
  return (
    <button type="button" className={`btn btn-secondary ${classNames ? classNames : ""}`} onClick={onClick}>{icon} {text}</button>
  )
}

export const DangerButton = ({text, icon, onClick, classNames}) => {
  return (
    <button type="button" className={`btn btn-danger ${classNames ? classNames : ""}`} onClick={onClick}>{icon} {text}</button>
  )
}

export const MessageButton = ({icon, onClick, classNames}) => (
  <button type="button" className={`btn-message ${classNames ? classNames : ""}`}>{icon}</button>
)

export const SecondaryButton = ({text, icon, onClick, classNames}) => (
  <button type="button" className={`btn btn-minimal ${classNames ? classNames : ""}`} onClick={onClick}>{icon} {text}</button>
)

export const SmallButton = ({text, icon, onClick, classNames}) => (
  <button type="button" className={`btn-small ${classNames ? classNames : ""}`} onClick={onClick}>{icon} {text}</button>
)

export const NoStyleButton = ({text, icon, onClick, classNames}) => (
  <button type="button" className={`btn-no-style ${classNames ? classNames : ""}`} onClick={onClick}>{icon} {text}</button>
)