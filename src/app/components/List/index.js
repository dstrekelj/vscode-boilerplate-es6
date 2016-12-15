/**
 * @fileoverview List component.
 * @module app/components/list
 * @requires react
 */

import React from 'react'

/**
 * @class
 * @extends React.Component
 */
function ListItem({ task, onRemoveTask }) {
  return (
    <li onClick={() => { onRemoveTask(task) }}>
      {task.value}
    </li>
  )
}

/**
 * @class List
 * @extends React.Component
 */
export default ({ taskArray, onRemoveTask }) => (
  <ul>
    {taskArray.map(
      task => <ListItem key={task.id} task={task} onRemoveTask={onRemoveTask} />
    )}
  </ul>
)
