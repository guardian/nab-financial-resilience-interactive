import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { storiesOf } from '@storybook/react'

/* Layout */
import { BodyCopy } from '../components/Layout'

/* Components */
import Footer from '../components/Footer'
import Card from '../components/Card'
import Help from '../components/Help/'
import RevealDown from '../components/RevealDown'
import CalloutButton from '../components/CalloutButton'
import { OptionList } from '../components/Quiz'

/* Quiz Components */
import { CheckBox } from '../components/Quiz'

/* Constants */
import { BP } from '../styles'

/* Media */
import iconArrow from '../icon-arrow.svg'

/* Data */
import data from '../data/questions'

injectGlobal`
${normalize()}

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
  src: url("fonts/icon-font.eot");
  src: url("fonts/icon-font.eot?#iefix") format("embedded-opentype"),
    url("fonts/icon-font.woff") format("woff"),
    url("fonts/icon-font.ttf") format("truetype"),
    url("fonts/icon-font.svg#icon-font") format("svg");
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
   height: 100% - 48px;
}

/* react full viewport height */
html, body, #root {
 height: 100%;
}

/* font smoothing */
body {
 -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-family: "Display Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}

h1, h2, h3, h4 {
  font-family: "Display Sans Heading", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}

* {
 box-sizing: border-box;
}

`

const StyleWrapper = styled.div``

const mockHelpBox = (
  <div>
    <p key="A">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at aliquam.
      Tempora expedita impedit sed ducimus mollitia!
    </p>
    <p key="B">
      Possimus velit ducimus, nisi, illo delectus repellendus nihil tempora
      doloremque odit libero suscipit.
    </p>
    <CalloutButton
      outboundUrl="#"
      text="Find out more"
      icon={iconArrow}
      key="C"
    />
  </div>
)

storiesOf('Layout', module)
  .add('Footer', () => <Footer />)
  .add('Card', () => (
    <Card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat autem
      quisquam error debitis itaque tempore blanditiis, sapiente cum, eaque rem
      ipsum, aspernatur fuga culpa! Facere veritatis rerum commodi magni ullam!
    </Card>
  ))
  .add('RevealDown', () => (
    <RevealDown>
      {mockHelpBox}
      {mockHelpBox}
      {mockHelpBox}
      {mockHelpBox}
      {mockHelpBox}
      {mockHelpBox}
    </RevealDown>
  ))

storiesOf('Quiz Atoms', module)
  .add('Checkbox Selected', () => <CheckBox isSelected />)
  .add('Checkbox Disabled', () => <CheckBox isDisabled />)

const mockOptions = data[1].options.map(o => o.text)

storiesOf('Quiz Molecules', module).add('Questions', () => (
  <Card>
    <OptionList questions={mockOptions} />
  </Card>
))
