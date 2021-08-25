import React from 'react'
import { connect } from 'react-redux'
import { editTask, deleteTask } from '../../store/actions'
import { TaskContainer, Content, Title, Info, Priority } from './styled'

const Task = ({ deleteTask, task, provided, list, innerRef }) => {
  function deleteT() {
    deleteTask(list.id, task.id)
  }
  return (
    <TaskContainer
      className='card mb-3'
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Content className='card-header'>
        <Title>{task.title}</Title>
        <button className='btn btn-danger btn-sm' onClick={(e) => deleteT(e)}>
          Delete
        </button>
      </Content>
      <Info className='card-body p-25'>
        <span>{task.description}</span>
        <Priority>{task.priority}</Priority>
      </Info>
    </TaskContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, value) => dispatch(editTask(id, value)),
  deleteTask: (listId, id) => dispatch(deleteTask(listId, id)),
})

export default connect(null, mapDispatchToProps)(Task)
