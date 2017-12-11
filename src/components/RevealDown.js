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
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -40px 0 0 -40px;

  @media (min-width: ${BP.tablet}px) {
    margin: -80px 0 0 -80px;
  }
`

const GridItem = styled.div`
  flex: auto;
  padding: 40px 0 0 40px;
  display: flex;

  @media (min-width: ${BP.tablet}px) {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    padding: 80px 0 0 80px;
  }
`

const Header = styled.header`
  cursor: pointer;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${BP.mobile}px) {
      font-size: 1.6rem;
    }
    i {
      color: ${COLOURS.highlights};
      font-size: 1.7rem;
      flex: 0;
      transform: ${props => (props.isOpen ? 'rotate(90deg)' : 'none')};
      transition: transform 0.2s;
      margin-left: 0.5em;
      &::before {
        display: block;
        transform: translatey(3px);
      }
    }
  }
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  width: 93.75%;
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
        <Container>
          <Header onClick={e => this.handleClick(e)} isOpen={this.state.isOpen}>
            <h1 style={{ margin: "60px auto" }}>
              If you need help
              <i data-icon="a" />
            </h1>
          </Header>
          <HiddenContent isOpen={this.state.isOpen}>
            <Grid>
              {content(this.props.children)}
            </Grid>
          </HiddenContent>
        </Container>
      </Wrapper>
    )
  }
}
export default RevealDown
