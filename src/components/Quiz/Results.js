/* eslint-disable */
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

const Wrapper = styled.div`
  padding: 2em 0 3em;
  text-align: center;

  > * {
    line-height: 1.5;
    margin: 1.5rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    line-height: 1.25;
    margin: 0 0 1.5rem;
    text-align: center;
  }
`

const Subheading = styled.div`
  font-style: italic;

  p {
    line-height: 1.5;
    margin-bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
    max-width: 720px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`
const ButtonWrapper = styled.div`margin-top: 2rem;`

const UserAnswer = styled.p`font-style: italic;`

const SupportLink = styled(Link)`
  background-color: #be0d00;
  border-radius: 2em;
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin: 3rem auto 0;
  max-width: 10em;
  padding: 1.5em;
  text-decoration: none;

  &:hover,
  &:active {
    color: #fff;
    text-decoration: none;
  }
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
        <h1 style={{ fontWeight: 'normal', marginTop: '3rem' }}>You’ve completed the quiz</h1>,
        <p>For information on how to become more financially resilient view our support page.</p>,
        <SupportLink to="/support">Support</SupportLink>
      ]
    )}
  </Wrapper>
)

export default Results
