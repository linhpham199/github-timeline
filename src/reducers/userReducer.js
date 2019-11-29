import { ActionTypes } from '../constants'

export const initialState = {
  account: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_OK:
      return {
        ...state,
        account: action.account,
      }

    default:
      return state
  }
}
