/**
 * @fileoverview Input component.
 * @module app/components/input
 * @requires react
 */

import React from 'react'

/**
 * @class Input
 * @extends React.Component
 */
export default ({ onRef }) => (
  <input ref={onRef} type="text" />
)
