// @flow
import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'
import questions from '../../data/questions'

type Option = {|
  +id: number,
  +correct: boolean,
  +text: string
|}

type Question = {|
  +id: number,
  +question: string,
  +options: Array<Option>
|}

type QuizApp = {|
  +progress: number,
  +resultsProgress: number,
  +answerSubmitted: boolean,
  +quizCompleted: boolean,
  +userResults: number | null
|}

type Action = {
  +type: string,
  +payload: string
}

const quizAppState = {
  progress: 0,
  resultsProgress: 0,
  answerSubmitted: false,
  quizCompleted: false,
  userResults: []
}

export function getQuestions(state: Array<Question> = questions) {
  return state
}

export function quizApp(state: QuizApp = quizAppState, action: Action) {
  switch (action.type) {
    case types.INCREMENT_PROGRESS:
      return Object.assign({}, state, {
        progress: state.progress + 1,
        answerSubmitted: false
      })
    case types.INCREMENT_RESULTS_PROGRESS:
      return Object.assign({}, state, {
        resultsProgress: state.resultsProgress + 1
      })

    case types.TOGGLE_OPTION:
      return Object.assign({}, state, {
        currentlySelectedOptions: action.payload
      })

    case types.SUBMIT_ANSWER:
      return Object.assign({}, state, {
        userResults: [...state.userResults, action.payload]
      })

    case types.SUBMIT_QUIZ:
      return Object.assign({}, state, {
        quizCompleted: true
      })

    case types.RESET_QUIZ:
      return Object.assign({}, state, quizAppState)

    default:
      return state
  }
}

export default combineReducers({
  getQuestions,
  quizApp
})
