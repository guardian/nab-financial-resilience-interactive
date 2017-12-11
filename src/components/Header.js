// @flow
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  max-width: 1280px;
  width: 93.75%;
`

const Social = styled.div`
  display: flex;
  margin-right: auto;

  a {
    flex: none;

    &:not(:last-child) {
      margin-right: 0.5em;
    }

    img {
      width: 32px;
    }
  }
`

const PaidFor = styled.div`
  border-top: 1px dashed grey;
  color: grey;
  font-size: 0.75rem;
  padding-top: 0.25rem;
  width: 8em;

  img {
    display: block;
    margin-top: 0.25rem;
    width: 5em;
  }
`

const SocialShare = styled.a``

const Header = () => (
  <Wrapper>
    <Container>
      <Social>
        <SocialShare href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`}>
          <img src={`${process.env.PUBLIC_URL}/icons/icon-social-fb.svg`} alt="Share on Facebook" />
        </SocialShare>
        <SocialShare href={`https://twitter.com/intent/tweet?text=${window.location}`}>
          <img src={`${process.env.PUBLIC_URL}/icons/icon-social-twitter.svg`} alt="Share on Twitter" />
        </SocialShare>
      </Social>
      <PaidFor>
        Paid for by
        <img src={`${process.env.PUBLIC_URL}/icons/icon-logo.png`} alt="NAB" />
      </PaidFor>
    </Container>
  </Wrapper>
)

export default Header
