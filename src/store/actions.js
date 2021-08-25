export const ADD_TASK = 'ADD_TASK'
export const MOVE_TASK = 'MOVE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const ADD_COLUMN = 'ADD_COLUMN'
export const ADD_TASK_LIST='ADD_TASK_LIST'
export const ADD_TASK_ITEM='ADD_TASK_ITEM'
export const DELETE_LIST='DELETE_LIST'
export function addTaskToList(ToListId, id) {
    return { type: ADD_TASK_LIST, ToListId,id }
}
export function addTaskToItem(id, title,description,status,priority) {
    return { type: ADD_TASK_ITEM,id, title ,description,status,priority }
}

export function moveTask(source, destination, draggableId) {
    return { type: MOVE_TASK, source, destination, draggableId }
}

export function editTask(id, value) {
    return { type: EDIT_TASK, id, value }
}

export function deleteTask(listId, id) {
    return { type: DELETE_TASK, listId, id }
}
export function addColumn(name) {
    return { type: ADD_COLUMN, name }
}
export function deleteList(list){
    return{type:DELETE_LIST, list}
}