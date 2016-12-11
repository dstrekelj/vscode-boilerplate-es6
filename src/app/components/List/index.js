import React from 'react'

function ListItem({ task, onRemoveTask }) {
  return (
    <li onClick={() => { onRemoveTask(task) }}>
      {task.value}
    </li>
  )
}

export default ({ taskArray, onRemoveTask }) => (
  <ul>
    {taskArray.map(
      task => <ListItem key={task.id} task={task} onRemoveTask={onRemoveTask} />
    )}
  </ul>
)
