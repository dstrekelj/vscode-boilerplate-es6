/**
 * @fileoverview Application entry point.
 * @module app
 * @requires react
 * @requires react-dom
 * @requires app/containers/app
 */

import React from 'react'
import { render } from 'react-dom'

import App from 'app/containers/App'

import 'styles/index.scss'

render(<App />, document.getElementById('app'))
