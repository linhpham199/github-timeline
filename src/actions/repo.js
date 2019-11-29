import axios from 'axios'
import { GithubAPI } from '../constants'

require('dotenv').config()

export default function fetchRepos(gitAccount) {
  const { API, USERS, REPOS } = GithubAPI

  return (dispatch, getState) => {
    console.log('user', getState().user.account)
    console.log('fetch')

    axios(`${API}${USERS}${gitAccount}/${REPOS}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }
}
