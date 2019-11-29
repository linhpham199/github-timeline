import axios from 'axios'
import { GithubAPI, ActionTypes } from '../constants'

require('dotenv').config()

export const fetchReposOK = () => ({
  type: ActionTypes.FETCH_REPOS_OK,
})

export const fetchReposALL = reposList => ({
  type: ActionTypes.FETCH_REPOS_ALL,
  reposList,
})

export const fetchReposFAIL = () => ({
  type: ActionTypes.FETCH_REPOS_FAIL,
})

export default function fetchRepos() {
  const { API, USERS, REPOS } = GithubAPI

  return (dispatch, getState) => {
    const gitAccount = getState().user.account
    console.log(`${API}${USERS}${gitAccount}${REPOS}`)

    axios(`${API}${USERS}/${gitAccount}${REPOS}?sort=created`)
      .then(response => {
        console.log(response.data)
        dispatch(fetchReposOK())
        return response.data
      })
      .then(repos => {
        const reposList = repos.map(repo => ({
          name: repo.name,
          description: repo.description,
          date: repo.created_at,
          repoURL: repo.html_url,
          demo: repo.homepage,
          language: repo.language,
        }))

        dispatch(fetchReposALL(reposList))
      })
      .catch(err => console.log(err))
  }
}
