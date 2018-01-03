// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../Card'
import ResultsCopy from './ResultsCopy'
import { NextButton } from '../NextButton'

type Props = {
  resultsProgress: number,
  userResults: Array<Object>,
  questions: Array<string>,
  onIncrementResultsProgress: Function => void,
};

const Wrapper = styled.div`text-align: center;`
const Subheading = styled.div`
  font-style: italic;
  line-height: 1.2em;
`
const ButtonWrapper = styled.div`margin-top: 2rem;`

const UserAnswer = styled.p`font-style: italic;`

const SupportLink = styled(Link)`
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
    margin-bottom: 2em;
    padding-bottom: 2em;
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
        <CardWrapper>
          <UserAnswer key={`UserAnswer_${i}`}>Your answer: {r}</UserAnswer>
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
        <h1 style={{ fontWeight: 'normal', margin: '2rem 0' }}>You’ve completed the quiz</h1>,
        <p>Become more financially resilient</p>,
        <p>If you need help – click through to support page</p>,
        <SupportLink to="/support">Support</SupportLink>
      ]
    )}
  </Wrapper>
)

export default Results
