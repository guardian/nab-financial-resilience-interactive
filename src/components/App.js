/* eslint-disable no-unused-expressions */
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Routes from '../routes'
import { MockGuardianHeader } from './Layout'

/* Constants */
import { BP } from '../styles'

/* Components */
import Header from './Header'
import Footer from './Footer'
import CalloutButton from './CalloutButton'
import RevealDown from './RevealDown'

/* Media */
import iconArrow from '../icon-arrow.svg'

injectGlobal`
 ${normalize()}

/* FONTS */

@charset "UTF-8";

/* regular */
@font-face {
  font-family:'Display Sans';
  src: url('https://interactive.guim.co.uk/embed/labs/fonts/DS3-Display-Sans.eot');
  src: url('https://interactive.guim.co.uk/embed/labs/fonts/DS3-Display-Sans.eot?#iefix') format('embedded-opentype'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS3-Display-Sans.woff2') format('woff2'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS3-Display-Sans.woff') format('woff'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS3-Display-Sans.ttf') format('truetype'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS3-Display-Sans.svg#ds3') format('svg');
  font-weight: 400;
 }

 /* heading */
 @font-face {
  font-family:'Display Sans Heading';
  src: url('https://interactive.guim.co.uk/embed/labs/fonts/DS4-Display-Sans-Medium.eot');
  src: url('https://interactive.guim.co.uk/embed/labs/fonts/DS4-Display-Sans-Medium.eot?#iefix') format('embedded-opentype'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS4-Display-Sans-Medium.woff2') format('woff2'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS4-Display-Sans-Medium.woff') format('woff'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS4-Display-Sans-Medium.ttf') format('truetype'),
  url('https://interactive.guim.co.uk/embed/labs/fonts/DS4-Display-Sans-Medium.svg#ds3') format('svg');
  font-weight: 500;
 }
 /* Icon Font */

 @font-face {
   font-family: "icon-font";
   src: url("${process.env.REACT_APP_PATH}/fonts/icon-font.eot");
   src: url("${process.env.REACT_APP_PATH}/fonts/icon-font.eot?#iefix") format("embedded-opentype"),
     url("${process.env.REACT_APP_PATH}/fonts/icon-font.woff") format("woff"),
     url("${process.env.REACT_APP_PATH}/fonts/icon-font.ttf") format("truetype"),
     url("${process.env.REACT_APP_PATH}/fonts/icon-font.svg#icon-font") format("svg");
   font-weight: normal;
   font-style: normal;
 }

[data-icon]:before {
  font-family: "icon-font" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/* Guardian specific */
.element-atom,
.interactive-atom {
    margin: 0 !important;
}

/* set REM */
html {
  font-size: 16px;
  background-color: #E8E8E8;
  @media (min-width: ${BP.mobile}px){
    font-size: 18px;
  }
  @media (min-width: ${BP.tablet}px) {
    font-size: 22px;
  }
}

/* immersive atoms */
html,
body,
.element-atom,
.interactive-atom {
    /* height: 100% - 48px; */
}

/* react full viewport height */
html, body, #root {

}

/* font smoothing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Display Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4 {
  font-family: "Display Sans Heading", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}

a:active {
  color: inherit;
}
`

const Wrapper = styled.div`
  background-color: #E8E8E8;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  width: 93.75%;
`

const SupportBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BP.tablet}px) {
    font-family: 'Display Sans';
    height: 100%;
    max-height: 420px;
    position: relative;
  }

  > p {
    margin: 0 0 1em;
  }

  strong {
    font-family: 'Display Sans Heading';
  }

  > div {
    margin: auto auto 0;

    a {
      margin: 0;
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

const App = () => (
  <Wrapper>
    <MockGuardianHeader />
    <Header />
    <Container>{Routes}</Container>
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
  </Wrapper>
)

export default App
