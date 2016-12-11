import React from 'react'

export default ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
)
