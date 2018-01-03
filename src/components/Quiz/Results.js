// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../Card'
import ResultsCopy from './ResultsCopy'
import { NextButton } from '../NextButton'
import { COLOURS } from '../../styles'

type Props = {
  resultsProgress: number,
  userResults: Array<Object>,
  questions: Array<string>,
  onIncrementResultsProgress: Function => void,
  onQuizReset: Function => void
};

const Wrapper = styled.div`text-align: center;`
const Subheading = styled.div`
  font-style: italic;
  line-height: 1.2em;
`
const ButtonWrapper = styled.div`margin-top: 2rem;`

const UserAnswer = styled.p`font-style: italic;`

const ResetButton = styled(Link)`
  background: url(${process.env.PUBLIC_URL}/icons/icon-reset.svg) no-repeat;
  background-size: cover;
  background-position: center;
  width: 66px;
  height: 66px;
  display: inline-block;
  margin-bottom: 0.5rem;
`

const ResetButtonLabel = styled.div`
  color: ${COLOURS.highlights};
  font-size: 0.8rem;
`

const HelpLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 60px;
  text-decoration: none;
  color: white;
  background-color: #be0d00;
  padding: 0;
  border-radius: 34px;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin: 60px auto;
`

const CardWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: #ccc solid 1px;
  }
`

const Results = (props: Props) => (
  <Wrapper>
    <h1>Results</h1>
    <Subheading>
      <p>
        Question {props.resultsProgress + 1}:<br />
        {props.questions[props.resultsProgress].question}
      </p>
    </Subheading>
    <Card>
      {props.userResults[props.resultsProgress].result.map((r, i) => [
        <UserAnswer key={`UserAnswer_${i}`}>Your answer: {r}</UserAnswer>,
        <CardWrapper>
          <ResultsCopy
            data={props.questions[props.resultsProgress]}
            result={props.userResults}
            resultsProgress={props.resultsProgress}
            key={`ResultsCopy_${i}`}
            iterator={i}
          />
        </CardWrapper>
      ])}
    </Card>
    {props.resultsProgress < props.questions.length - 1 ? (
      <ButtonWrapper>
        <NextButton handleClick={() => props.onIncrementResultsProgress()} />
      </ButtonWrapper>
    ) : (
      [
        <h1 style={{ fontWeight: "normal", margin: "2rem 0" }}>Thanks for completing the quiz!</h1>,
        <ResetButton onClick={() => props.onQuizReset()} to="/quiz" />,
        <ResetButtonLabel>restart quiz</ResetButtonLabel>,
        <HelpLink to="/help">If you need help</HelpLink>
      ]
    )}
  </Wrapper>
)

export default Results
