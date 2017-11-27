// @flow
import React from 'react'
import styled from 'styled-components'
import { BodyCopy, Heading } from '../../components/Layout'
import CalloutButton from '../../components/CalloutButton'
import icon from './icon-arrow.svg'
import { COLOURS } from '../../styles'

const Wrapper = styled.footer`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 980px) {
    flex-direction: row;
  }
`

const HelpBox = styled.div``

const Help = () => (
  <Wrapper>
    <HelpBox>
      <Heading>If you need help</Heading>
      <BodyCopy>
        <p>
          <strong>
            Financial counselling contact for feelings of distress
          </strong>
        </p>
        <p>
          Australian Securities and Investments Commission, Money Smart
          Financial Services Hotline
          <br />
          1800 007 007
        </p>
      </BodyCopy>
      <CalloutButton icon={icon} text="Find out more" outboundUrl="#" />
    </HelpBox>
  </Wrapper>
)

export default Help
