import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actionCreators'
import Results from '../components/Quiz/Results'

function mapStateToProps(state) {
  return {
    totalQuestions: state.quizReducer.getQuestions.length,
    questions: state.quizReducer.getQuestions,
    options: state.quizReducer.getQuestions[
      state.quizReducer.quizApp.progress
    ].options.map(o => o.text),
    progress: state.quizReducer.quizApp.progress,
    resultsProgress: state.quizReducer.quizApp.resultsProgress,
    selectedOptions: state.quizReducer.quizApp.selectedOptions,
    userResults: state.quizReducer.quizApp.userResults,
    quizComplete: state.quizReducer.quizApp.quizCompleted
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementResultsProgress: bindActionCreators(
      actions.incrementResultsProgress,
      dispatch
    ),
    onQuizSubmit: bindActionCreators(actions.submitQuiz, dispatch),
    onQuizReset: bindActionCreators(actions.resetQuiz, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
