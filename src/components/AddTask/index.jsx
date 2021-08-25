import _ from 'lodash'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addTaskToList, addTaskToItem } from '../../store/actions'

const AddTask = ({ tasks, list }) => {
  const dispatch = useDispatch()
  function checkLength(item) {
    if (!item) return
    if (item.length > 15) return item.substring(0, 15) + '...'
    return item
  }
  function add() {
    let title = checkLength(window.prompt('Enter title of task')?.trim())
    let description = checkLength(
      window.prompt('Enter description of task')?.trim()
    )
    let status = checkLength(window.prompt('Enter status of task')?.trim())
    let priority = checkLength(window.prompt('Enter priority of task')?.trim())

    if (title && description && status && priority) {
      const id = tasks.length ? _.last(_.sortBy(tasks, 'id')).id + 1 : 1
      dispatch(addTaskToList(list.id, id))
      dispatch(addTaskToItem(id, title, description, status, priority))
    }
    return
  }
  return (
    <button className='btn btn-block btn-secondary' onClick={() => add()}>
      Add Task
    </button>
  )
}

const mapStateToProps = (state) => ({
  tasks: _.values(state.tasks),
})

export default connect(mapStateToProps)(AddTask)
