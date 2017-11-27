// @flow
import React from 'react'
import styled from 'styled-components'
import GuardianLogo from './icon_logo-guardian.svg'
import GLabsLogo from './icon_logo-glabs.svg'

const { NODE_ENV } = process.env

const Wrapper = styled.div`
  width: 100%;
  img {
    position: absolute;
    right: 0;
    top: 3px;
  }
  div:nth-child(1) {
    position: relative;
    background-color: #005689;
    height: 42px;
  }
  div:nth-child(2) {
    position: relative;
    height: 38px;
    background-color: #69d1ca;
  }
`

const MockGuardianHeader = () => {
  if (NODE_ENV !== 'production') {
    return (
      <Wrapper>
        <div>
          <img src={GuardianLogo} alt="Guardian Logo" />
        </div>
        <div>
          <img src={GLabsLogo} alt="GLabs Logo" />
        </div>
      </Wrapper>
    )
  }
  return null
}

export default MockGuardianHeader
