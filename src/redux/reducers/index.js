import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import quizReducer from './quiz_reducer'

const rootReducer = combineReducers({
  quizReducer,
  routing
})

export default rootReducer
