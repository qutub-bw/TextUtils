import React from 'react'

function Event(props) {
    
  return (
    props.msg && <div className="alert alert-success" role="alert">
    <strong>{props.msg}</strong>
  </div>
  )
}

export default Event