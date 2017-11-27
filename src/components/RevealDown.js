// @flow
import React, { Component, type Element } from 'react'
import styled from 'styled-components'
import { BP, COLOURS } from '../styles'

type Props = {
  children: Array<Element<*>>
};

type State = {
  isOpen: boolean,
  isMobile: boolean
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

const HiddenContent = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  flex-direction: column;
  transition: opacity 0.5s;
  @media (min-width: ${BP.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
const GridItem = styled.div`
  @media (min-width: ${BP.tablet}px) {
    flex: 1 0 33%;
    max-width: 33%;
    padding: 20px;
  }
`

const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  h1 {
    flex-grow: 1;
    @media (max-width: ${BP.mobile}px) {
      font-size: 1.6rem;
    }
  }
  i {
    flex-grow: 0;
    position: absolute;
    font-size: 1.7rem;
    color: ${COLOURS.highlights};
    transform: ${props => (props.isOpen ? 'rotate(90deg)' : 'none')};
    transition: transform 0.2s;
    align-self: center;
    right: 1em;
    &::before {
      display: block;
      transform: translatey(3px);
    }
  }
`

const content = elements =>
  elements.map((c, i) => <GridItem key={i}>{c}</GridItem>)

class RevealDown extends Component {
  state: State = {
    isMobile: false,
    isOpen: false
  }

  props: Props

  handleClick = e => {
    e.preventDefault()
    this.setState(
      Object.assign({ ...this.state }, { isOpen: !this.state.isOpen })
    )
  }

  render() {
    return (
      <Wrapper>
        <Header onClick={e => this.handleClick(e)} isOpen={this.state.isOpen}>
          <h1>If you need help</h1>
          <i data-icon="a" />
        </Header>
        <HiddenContent isOpen={this.state.isOpen}>
          {content(this.props.children)}
        </HiddenContent>
      </Wrapper>
    )
  }
}
export default RevealDown
