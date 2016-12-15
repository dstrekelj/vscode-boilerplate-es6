/**
 * @fileoverview Button component.
 * @module app/components/button
 * @requires react
 */

import React from 'react'

/**
 * @class Button
 * @extends React.Component
 */
export default ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
)
