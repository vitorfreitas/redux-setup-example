import { UPDATE_USER } from './types'

const defaultState = {
  name: 'Vitor',
  age: 18,
  email: 'vitorldfreitas@gmail.com'
}

const userReducer = (state = defaultState, action) => {
  const actionHandlers = {
    [UPDATE_USER]: () => ({
      ...state,
      ...action.payload
    })
  }

  return action.type in actionHandlers ? actionHandlers[action.type]() : state
}

export default userReducer
