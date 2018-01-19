import React from 'react'
import styled from 'styled-components'

/* Constants */
import { BP } from '../styles'

/* Components */
import Footer from './Footer'
import CalloutButton from './CalloutButton'
import RevealDown from './RevealDown'

/* Media */
import iconArrow from '../icon-arrow.svg'

const SupportBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${BP.tablet}px) {
    font-family: 'Display Sans';
    position: relative;
  }

  > p {
    margin: 0 0 1em;
    line-height: 1.25;
  }

  strong {
    font-family: 'Display Sans Heading';
  }

  > div {
    margin-top: auto;

    a {
      margin: 0 auto;
    }
  }
`

const SupportWrapper = styled.div`
  padding: 2em 0 3em;

  h1 {
    line-height: 1.25;
    margin: 0 0 1.5rem;
    text-align: center;
  }
`

const getSupportBox = (heading, copy, url) => (
  <SupportBox>
    <p key="A">
      <strong>{heading}</strong>
    </p>
    <p key="B">{copy}</p>
    <CalloutButton
      outboundUrl={url}
      replace
      text="Find out more"
      icon={iconArrow}
      key="C"
    />
  </SupportBox>
)

const Support = () => (
  <SupportWrapper>
    <RevealDown>
      {getSupportBox(
        'For advice on managing your money',
        'Money Smart Financial Services Hotline – 1800 007 007',
        'https://www.moneysmart.gov.au/managing-your-money'
      )}
      {getSupportBox(
        'Contacts for general feelings of distress',
        'Lifeline Crisis Support – 13 11 14',
        'https://www.lifeline.org.au/'
      )}
      {getSupportBox(
        'Contacts for general feelings of distress',
        'Beyond Blue – 1300 22 4636',
        'https://www.beyondblue.org.au/'
      )}
      {getSupportBox(
        'Information on no and low interest loans',
        'Good Shepherd Microfinance and NAB',
        'http://goodloans.org.au/'
      )}
      {getSupportBox(
        'Hardship contacts for major banks',
        'Australian Bankers Association',
        'https://www.bankers.asn.au/images/uploads/ArticleDocuments/127/Bank_financial_hardship_contacts_Aprill_2017.pdf'
      )}
      {getSupportBox(
        'General information if struggling to pay utility bills',
        'Money Smart – Australian Securities and Investments Commission',
        'https://www.moneysmart.gov.au/managing-your-money/managing-debts/trouble-with-debt/problems-paying-your-utility-bills'
      )}
    </RevealDown>
    <Footer />
  </SupportWrapper>
)

export default Support
