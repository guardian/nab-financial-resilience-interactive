// @flow
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`
const Social = styled.div`
  align-self: flex-start;
  flex-grow: 1;
  img {
    width: 40px;
    padding: 0.25rem;
  }
`
const PaidFor = styled.div`
  align-self: flex-end;
  border-top: 1px dashed grey;
  font-size: 0.75rem;
  color: grey;
  width: 6rem;
  padding-top: 0.3rem;
  img {
    margin-top: 0.3rem;
    display: block;
    width: 3.5rem;
  }
`

const SocialShare = styled.a``

const Header = () => (
  <Wrapper>
    <Social>
      <SocialShare
        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/icon-social-fb.svg`}
          alt="FB"
        />
      </SocialShare>
      <SocialShare
        href={`https://twitter.com/intent/tweet?text=${window.location}`}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/icon-social-twitter.svg`}
          alt="twitter"
        />
      </SocialShare>
    </Social>
    <PaidFor>
      Paid for by
      <img
        src={`${process.env.PUBLIC_URL}/icons/icon-logo.png`}
        alt="NAB Logo"
      />
    </PaidFor>
  </Wrapper>
)

export default Header
