// @flow
import React from 'react'
import { Switch, Route /* , HashRouter */ } from 'react-router-dom'
import Intro from './components/Intro'
import QuizContainer from './containers/QuizContainer'
import ResultsContainer from './containers/ResultsContainer'
import Help from './components/Help'

export default (
  <Switch>
    <Route exact path="/" render={() => <Intro />} />
    <Route path="/quiz" render={() => <QuizContainer />} />
    <Route path="/results" render={() => <ResultsContainer />} />
    <Route path="/help" render={() => <Help />} />
  </Switch>
)
