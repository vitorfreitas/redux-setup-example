import { UPDATE_USER } from './types'

const updateUser = user => ({
  type: UPDATE_USER,
  payload: {
    ...user
  }
})

export { updateUser }
