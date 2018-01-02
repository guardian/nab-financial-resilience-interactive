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

injectGlobal`
 ${normalize()}

body {
  overflow-x: hidden;
}

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

const App = () => (
  <Wrapper>
    <MockGuardianHeader />
    <Header />
    <Container>{Routes}</Container>
  </Wrapper>
)

export default App
