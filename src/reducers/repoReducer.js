import { ActionTypes } from '../constants'

export const initialState = {
  reposList: [],
}

export default function repo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_REPOS_OK:
      return {
        ...initialState,
      }

    case ActionTypes.FETCH_REPOS_ALL:
      return {
        ...state,
        reposList: action.reposList,
      }

    case ActionTypes.FETCH_REPOS_FAIL:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
