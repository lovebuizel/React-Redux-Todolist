const initState = {
  todos: [
    {id: 0, text: '吃早餐'},
    {id: 1, text: '上學'},
    {id: 2, text: '吃午餐'},
    {id: 3, text: '睡覺'}
  ],
  currentId: 3
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      const id = state.currentId + 1
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            id
          }
        ],
        currentId: id
      })

    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => {
          return todo.id !== action.id
        })
      })

    default:
      return state
  }
}

export default todoReducer