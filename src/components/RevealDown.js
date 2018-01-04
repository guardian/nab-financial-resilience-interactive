// @flow
import React, { Component, type Element } from 'react'
import styled from 'styled-components'
import { BP } from '../styles'

type Props = {
  children: Array<Element<*>>
};

const Wrapper = styled.div`
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  right: 50%;
  text-align: center;
  width: 100vw;
`

const GridWrapper = styled.div`
  margin: 2.5em 0 5em;
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
  h1 {
    @media (max-width: ${BP.mobile}px) {
      font-size: 1.6rem;
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

/* eslint-disable */
class RevealDown extends Component {
  props: Props

  render() {
    return (
      <Wrapper>
        <Container>
          <Header>
            <h1>
              Become more financially resilient
            </h1>
          </Header>
          <GridWrapper>
            <Grid>
              {content(this.props.children)}
            </Grid>
          </GridWrapper>
        </Container>
      </Wrapper>
    )
  }
}
export default RevealDown
