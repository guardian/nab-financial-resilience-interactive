import * as types from './actionTypes'

export function incrementProgress() {
  return {
    type: types.INCREMENT_PROGRESS
  }
}
export function incrementResultsProgress() {
  return {
    type: types.INCREMENT_RESULTS_PROGRESS
  }
}

export function optionToggle(option) {
  return {
    type: types.TOGGLE_OPTION,
    payload: option
  }
}

export function submitAnswer(snapshotOfOptions) {
  return {
    type: types.SUBMIT_ANSWER,
    payload: snapshotOfOptions
  }
}
export function submitQuiz() {
  return {
    type: types.SUBMIT_QUIZ
  }
}
export function resetQuiz() {
  return {
    type: types.RESET_QUIZ
  }
}
