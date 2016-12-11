import React from 'react'

import Button from 'app/components/Button'
import Input from 'app/components/Input'
import List from 'app/components/List'

import { actions, reducer } from 'app/reducers/App'

import dispatch from 'util/Dispatch'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = reducer(undefined, {})

    this.input = null

    this.dispatch = dispatch(this, reducer)

    this.handleOnAddTask = this.handleOnAddTask.bind(this)
    this.handleOnRemoveTask = this.handleOnRemoveTask.bind(this)
  }

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

  handleOnRemoveTask(task) {
    this.dispatch(
      actions.REMOVE_TASK,
      {
        task
      }
    )
  }

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
