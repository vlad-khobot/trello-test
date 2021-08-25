import _ from "lodash";
import { combineReducers } from "redux";
import { ADD_TASK_LIST, MOVE_TASK, DELETE_TASK, ADD_COLUMN, ADD_TASK_ITEM,DELETE_LIST } from "./actions";

function lists(state, action) {
    if (state === undefined) {
        return {
            open: { id: "open", title: "open", tasks: [2] },
            planned: { id: "planned", title: "planned", tasks: [3, 4, 7] },
            [`in-progress`]: { id: "in-progress", title: "in-progress", tasks: [5, 6] },
            done: { id: "done", title: "done", tasks: [1, 8, 9] },
        };
    }

    switch (action.type) {
       
        case ADD_COLUMN: {
            return {
                ...state,
                [action.name]: {
                    id: action.name,
                    tasks: [],
                    title: action.name
                }
            };
        }
        case DELETE_LIST: {
            const {[action.list.id]: deleteItem, ...newObj} = state

return {
    ...newObj
}
        }
        case ADD_TASK_LIST:
            return {
                ...state,
                [state[action.ToListId].id]: {
                  ...state[action.ToListId],
                  tasks: state[action.ToListId].tasks.concat(action.id)
                }
              };
        case MOVE_TASK: {

const {source,destination,draggableId} = action
if(!draggableId) return state
if(!destination) return state
const start=state[source.droppableId]
const finish=state[destination.droppableId]



if(destination.droppableId===source.droppableId&&destination.index===source.index) return state
if(start===finish){
    const column=state[source.droppableId]
const newTaskIds=Array.from(column.tasks)
newTaskIds.splice(source.index, 1)
newTaskIds.splice(destination.index, 0, draggableId)
return {...state, [destination.droppableId]: {
    ...state[destination.droppableId],
    tasks: newTaskIds,
}}
}

const startTasksIds=Array.from(state[source.droppableId].tasks)
startTasksIds.splice(source.index, 1)
const newStart={
    ...start,
    tasks: startTasksIds
}
const finishTasksIds=Array.from(state[destination.droppableId].tasks)
finishTasksIds.splice(destination.index,0,draggableId)
const newFinish={
    ...finish,
    tasks: finishTasksIds
}
return { 
    ...state,
    [newStart.id]: newStart,
    [newFinish.id]: newFinish,
}
        }
        case DELETE_TASK: {
          const list = state[action.listId];
          return {
            ...state,
            [list.id]: { ...list, tasks: _.without(list.tasks, action.id) }
          };
        }
        default:
          return state;
      }
}

function tasks(state, action) {
    if (state === undefined) {
        return {
            1: { id: 1, title: "Task #1", description: "Description task #1", status: "done", priority: "P0" },
            2: { id: 2, title: "Task #2", description: "Description task #2", status: "open", priority: "P1" },
            3: { id: 3, title: "Task #3", description: "Description task #3", status: "planned", priority: "P5" },
            4: { id: 4, title: "Task #4", description: "Description task #4", status: "planned", priority: "P1" },
            5: { id: 5, title: "Task #5", description: "Description task #5", status: "in-progress", priority: "P4" },
            6: { id: 6, title: "Task #6", description: "Description task #6", status: "in-progress", priority: "P2" },
            7: { id: 7, title: "Task #7", description: "Description task #7", status: "planned", priority: "P3" },
            8: { id: 8, title: "Task #8", description: "Description task #8", status: "done", priority: "P0" },
            9: { id: 9, title: "Task #9", description: "Description task #9", status: "done", priority: "P1" }

        };
    }


    switch (action.type) {

     
        case ADD_TASK_ITEM:
            const id =action.id
            const task = { id: id, title: action.title, description: action.description, status: action.status, priority: action.priority};
            return {
            ...state,
            [id]:task
          }
      
        case DELETE_TASK:
            return _.omit(state, action.id);
        default:
            return state;

    }
}



export default combineReducers({ lists, tasks });
