/**
 * @fileoverview Application container.
 * @module app/containers/app
 * @requires react
 * @requires app/components/button
 * @requires app/components/input
 * @requires app/components/list
 * @requires app/reducers/app
 * @requires util/dispatch
 */

import React from 'react'

import Button from 'app/components/Button'
import Input from 'app/components/Input'
import List from 'app/components/List'

import { actions, reducer } from 'app/reducers/App'

import dispatch from 'util/Dispatch'

/**
 * @classdesc The application container handles the application state.
 * @extends React.Component
 */
export default class App extends React.Component {
  /**
   * @constructor
   * @memberof app/containers/app
   * @param {React.Props} props - Component props
   */
  constructor(props) {
    super(props)

    this.state = reducer(undefined, {})

    this.input = null

    this.dispatch = dispatch(this, reducer)

    this.handleOnAddTask = this.handleOnAddTask.bind(this)
    this.handleOnRemoveTask = this.handleOnRemoveTask.bind(this)
  }

  /**
   * Handles task addition.
   *
   * @function handleOnAddTask
   * @memberof module:app/containers/app~
   */
  handleOnAddTask() {
    if (this.input.value === '') return

    this.dispatch(
      actions.ADD_TASK,
      {
        task: {
          id: Date.now(),
          value: this.input.value,
        }
      }
    )
    
    this.input.value = ''
  }

  /**
   * Handles task removal.
   *
   * @function handleOnRemoveTask
   * @memberof module:app/containers/app~
   * @param {Object} task
   */
  handleOnRemoveTask(task) {
    this.dispatch(
      actions.REMOVE_TASK,
      {
        task
      }
    )
  }

  /**
   * @function render
   * @memberof module:app/containers/app#
   */
  render() {
    return (
      <div className="wrapper">
        <Input onRef={e => { this.input = e }} />
        <Button onClick={this.handleOnAddTask}>
          Add Task
        </Button>
        <List
          taskArray={this.state.tasks}
          onRemoveTask={this.handleOnRemoveTask}
        />
      </div>
    )
  }
}
