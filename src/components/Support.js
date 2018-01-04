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
        'Financial counselling contact for feelings of distress',
        `Australian Securities and Investments Commission, Money Smart Financial Services Hotline 1800 007 007`,
        'https://www.moneysmart.gov.au/managing-your-money/managing-debts/financial-counselling'
      )}
      {getSupportBox(
        'General information on small amount loans',
        'Australian Securities and Investments Commission, Money Smart',
        'https://www.moneysmart.gov.au/borrowing-and-credit/other-types-of-credit/personal-loans'
      )}
      {getSupportBox(
        'Hardship contacts for the major banks',
        'Australian Bankers Association',
        'https://www.bankers.asn.au/images/uploads/ArticleDocuments/127/Bank_financial_hardship_contacts_Aprill_2017.pdf'
      )}
      {getSupportBox(
        'General information if struggling to pay utility bills',
        'Australian Securities and Investments Commission, Money Smart',
        'https://www.moneysmart.gov.au/managing-your-money/managing-debts/trouble-with-debt/problems-paying-your-utility-bills'
      )}
      {getSupportBox(
        'General contacts for feelings of distress',
        `Lifeline Crisis Support 13 11 14`,
        'https://www.lifeline.org.au/'
      )}
      {getSupportBox(
        'Good Shepherd Microfinance & NAB',
        `If you’re living on a low income, you might qualify for no or low interest loan.`,
        'https://www.nab.com.au/about-us/corporate-responsibility/customers/small-loans'
      )}
    </RevealDown>
    <Footer />
  </SupportWrapper>
)

export default Support
