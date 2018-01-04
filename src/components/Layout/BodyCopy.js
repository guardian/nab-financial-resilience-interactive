// @flow
import React, { type Element } from 'react'
import styled from 'styled-components'
import { COLOURS } from '../../styles'

type Props = {|
  +children: Element<*>,
  +style: string,
  inverted?: boolean
|};

const Wrapper = styled.div`
  font-size: ${(props: Props) => props.rem || 1}rem;
  color: ${(props: Props) => props.inverted ? COLOURS.bodyCopy.inverted : COLOURS.bodyCopy.default};

  p {
    line-height: 1.5;
    margin-bottom: 1em;
    margin-top: 1em;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

const BodyCopy = (props: Props) => {
  let rem
  switch (props.style) {
    case 'small':
      rem = 0.9
      break
    case 'tiny':
      rem = 0.8
      break
    default:
      rem = 1
  }
  return (
    <Wrapper rem={rem} {...props}>
      {props.children}
    </Wrapper>
  )
}

export default BodyCopy
