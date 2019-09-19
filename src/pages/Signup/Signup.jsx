import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import SignupForm from '../../components/forms/SignupForm'

const Signup = () => {
  return (
    <DisplayWrapper header={true}>
      <div className="d-f fxd-c ai-c">
        <h1 className="title">Become Prestigious</h1>
        <SignupForm />
      </div>
    </DisplayWrapper>
  )
}

export default Signup
