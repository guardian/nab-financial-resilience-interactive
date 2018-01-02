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

const Help = () => (
  <div>
    <RevealDown>
      {getSupportBox(
        'Financial counselling contact for feelings of distress',
        `Australian Securities and Investments Commission, Money Smart
        Financial Services Hotline
        1800 007 007`,
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
        `Lifeline Crisis Support
        13 11 14`,
        'https://www.lifeline.org.au/'
      )}
      {getSupportBox(
        'Beyond Blue',
        `Support Service
        1300 224 636`,
        'https://www.beyondblue.org.au/'
      )}
    </RevealDown>
    <Footer />
  </div>
)

export default Help
