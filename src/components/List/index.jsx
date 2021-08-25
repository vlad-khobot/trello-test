import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import AddTask from '../AddTask'
import Task from '../Task'
import { useDispatch } from 'react-redux'
import { deleteList } from '../../store/actions'
import { ListContainer, HeaderContainer, Title, StyledButton } from './styled'

const List = ({ tasks, list, provided, innerRef }) => {
  const dispatch = useDispatch()
  function deleteL() {
    dispatch(deleteList(list))
  }
  return (
    <ListContainer className='col-3 mb-5' ref={innerRef}>
      <div className='card'>
        <HeaderContainer>
          <Title className='card-header'>{list.title}</Title>
          <StyledButton
            className='btn btn-danger btn-sm'
            onClick={deleteL}
          ></StyledButton>
        </HeaderContainer>

        <div className='card-body'>
          {tasks.map((task, index) => {
            if (!task) return null
            return (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <Task
                    snapshot={snapshot}
                    list={list}
                    task={task}
                    innerRef={provided.innerRef}
                    provided={provided}
                  />
                )}
              </Draggable>
            )
          })}
          {provided.placeholder}
          <AddTask list={list} />
        </div>
      </div>
    </ListContainer>
  )
}

export default List
