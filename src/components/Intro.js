// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  text-align: center;
  padding: 0 20px;
`

const StartButton = styled(Link)`
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
      Take the quiz below to find out how you compare to the other Australian
      adult population on some of the indicators of financial resilience.
    </p>
    <StartButton text="Start Quiz" to="/quiz">
      Start Quiz
    </StartButton>
  </Wrapper>
)

export default Intro
