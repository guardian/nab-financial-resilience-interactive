import React from 'react'
import styled from 'styled-components'
import { BodyCopy, Heading } from '../components/Layout'
import CalloutButton from '../components/CalloutButton'
import icon from '../icon-pdf.svg'
import { COLOURS } from '../styles'

const Wrapper = styled.footer`
  background-color: ${COLOURS.bodyCopy.default};
  text-align: center;
  padding: 20px;
`

const Footer = () => (
  <Wrapper>
    <Heading inverted>Resilience is a valuable commodity</Heading>
    <BodyCopy inverted>
      <p>
        The ability to recover from a setback is vital in preventing longer-term
        damage. NAB wants to enable Australians to have resources and support in
        times of financial trouble.
      </p>

      <p>
        If you’re a NAB customer and need support, contact{' '}
        <a
          href="https://www.nab.com.au/personal/help-and-guidance/financial-hardship"
          rel="noopener noreferrer"
          target="_blank"
        >
          NAB Assist
        </a>{' '}
        on 1800 701 599.
      </p>
      <p>
        Learn more about{' '}
        <a
          href="https://www.nab.com.au/about-us/corporate-responsibility/customers/small-loans"
          rel="noopener noreferrer"
          target="_blank"
        >
          NAB’s $130 million commitment
        </a>{' '}
        to help low income people access fair and affordable credit when they
        need it.
      </p>
    </BodyCopy>
    <CalloutButton
      icon={icon}
      iconSize={30}
      width={240}
      text="Download the Financial Resilience Report"
      outboundUrl="https://www.nab.com.au/about-us/corporate-responsibility/shareholders/financial-resilience"
    />
  </Wrapper>
)

export default Footer
