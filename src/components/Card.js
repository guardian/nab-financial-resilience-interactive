// @flow
import styled from 'styled-components'
import { BP } from '../styles'

const Card = styled.div`
  background-color: #f1f3f4;
  border-radius: 0.5em;
  box-shadow: 0.375em 0.375em 0.75em rgba(0,0,0, 0.5);
  padding: 2em 1em;

  @media (min-width: ${BP.tablet}px) {
    padding: 2em;
  }

  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p,
  ul {
    line-height: 1.375;
    margin-bottom: 1.375em;
    margin-top: 1.375em;

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

export default Card
