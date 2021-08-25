import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import List from '../List'
import { moveTask } from '../../store/actions'
import styled from 'styled-components'
const StyledKanbanContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 80px 10px;
  justify-content: center;
  @media screen and (min-width: 1848px) {
    justify-content: flex-start;
  }
`
const KanbanLists = ({ lists, tasks, moveTask }) => {
  function getTasks(list, tasks) {
    return _.map(list.tasks, (taskId) => tasks[taskId])
  }

  function onDragEnd(result) {
    const { source, destination, draggableId } = result

    moveTask(source, destination, +draggableId)
  }

  return (
    <StyledKanbanContainer className='row'>
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map((list) => (
          <Droppable droppableId={list.id} key={list.id}>
            {(provided, snapshot) => (
              <List
                list={list}
                tasks={getTasks(list, tasks)}
                innerRef={provided.innerRef}
                provided={provided}
              />
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </StyledKanbanContainer>
  )
}

const mapStateToProps = (state) => ({
  lists: _.values(state.lists),
  tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
  moveTask: (fromListId, toListId, id) =>
    dispatch(moveTask(fromListId, toListId, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(KanbanLists)
