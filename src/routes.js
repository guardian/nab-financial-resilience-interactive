// @flow
import React from 'react'
import { Switch, Route /* , HashRouter */ } from 'react-router-dom'
import Intro from './components/Intro'
import QuizContainer from './containers/QuizContainer'
import ResultsContainer from './containers/ResultsContainer'
import Support from './components/Support'

export default (
  <Switch>
    <Route exact path="/" render={() => <Intro />} />
    <Route path="/quiz" render={() => <QuizContainer />} />
    <Route path="/results" render={() => <ResultsContainer />} />
    <Route path="/support" render={() => <Support />} />
  </Switch>
)
