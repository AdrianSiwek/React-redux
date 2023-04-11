export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';


const addRate = ({ author, comment, rate }) => ({
    type: ADD,
    payload: {
        author,
        id: Math.floor(Math.random() * 1000),
        comment,
        rate,
    }
})

const deleteRate = ({ id }) => ({
    type: DELETE,
    payload: {
        id,
    }
})

const editRate = ({ author, comment, id, rate }) => ({
    type: EDIT,
    payload: {
        author,
        comment,
        id,
        rate,
    }
})