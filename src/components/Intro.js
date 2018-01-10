// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 2em 0 3em;
  text-align: center;

  h1,
  p {
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
  }

  p {
    line-height: 1.5;
  }
`

const StartButton = styled(Link)`
  background-color: #be0d00;
  border-radius: 2em;
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin: 3rem auto 0;
  max-width: 15em;
  padding: 1.5em;
  text-decoration: none;

  &:hover,
  &:active {
    color: #fff;
    text-decoration: none;
  }
`

const Intro = () => (
  <Wrapper>
    <h1>Are you prepared for a financial shock?</h1>
    <p>
      Life is full of events, good and bad, that impact on our finances from
      having a baby to an unexpected medical expense. To weather a financial
      storm you need to be financially resilient. This means that you have the
      knowledge and capability to draw on resources and support when you need
      them.
    </p>
    <p>
      Take the quiz below to find out how you compare to other Australians on
      some of the indicators of financial resilience.
    </p>
    <StartButton text="Start Quiz" to="/quiz">
      Test your financial resilience
    </StartButton>
  </Wrapper>
)

export default Intro
