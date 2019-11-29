import { ActionTypes } from '../constants'

export const setUserOK = account => ({
  type: ActionTypes.SET_USER_OK,
  account,
})

export default function setUser(account) {
  return dispatch => {
    dispatch(setUserOK(account))
  }
}
