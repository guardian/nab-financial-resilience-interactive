// @flow
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { VictoryPie } from 'victory'

type Props = {
  result: Array<Object>,
  data: Object,
  resultsProgress: number,
  iterator: number
};

const createLink = (
  url: string,
  text: string,
  key: string,
  spaceBefore: number = true,
  spaceAfter: number = true
) => [
  spaceBefore && ' ',
  <a href={url} target="_blank" rel="noopener noreferrer" key={key}>
    {text}
  </a>,
  spaceAfter && ' '
]

const ChartWrapper = styled.div`
  height: 300px;
  max-width: 100%;
  margin: 0 auto;

  svg {
    text {
      &:nth-child(3) tspan {
        font-size: 32px !important;
      }

      &:nth-child(4) tspan {
        font-size: 16px !important;
      }
    }
  }
`

const generatePieChart = (i, data) => (
  <ChartWrapper key={`RESULTS_Q_2_CHART_${i}`}>
    <VictoryPie
      colorScale={['#09B24F', 'rgba(9,178,79,0.2)']}
      data={[{ x: 'You', y: data[i] }, { x: 'Australian adult population', y: 100 - data[i] }]}
      style={{
        labels: {
          fontFamily: 'Display Sans',
          fontWeight: 'bold'
        }
      }}
    />
  </ChartWrapper>
)

const ResultsCopy = ({ result, data, resultsProgress, iterator }: Props) => {
  const singleAnswer = result[resultsProgress].result[0]
  const multipleAnswers = result[resultsProgress].result[iterator]
  const statistic = data.options.map(d => d.result)
  const thisResult = result[resultsProgress].result;

  switch (resultsProgress) {
    case 0:
      /* QUESTION 1 */
      if (singleAnswer.toLowerCase() === 'yes') {
        return [
          generatePieChart(0, statistic),
          <p key="RESULTS_Q1_P1">
            You’re in good company. 80% of Australians can raise $2000 in an emergency.
          </p>
        ]
      }
      return [
        generatePieChart(1, statistic),
        <p key="RESULTS_Q1_P1">
          You’re not alone. Around 1 in 10 Australians report not being able to
          raise $2000 in a week for an emergency.
        </p>,
        <p key="RESULTS_Q1_P2">
          Here’s some tips:
        </p>,
        <ul key="RESULTS_Q1_P3">
          <li>
            To start saving, visit the
            {createLink(
              'https://www.moneysmart.gov.au/managing-your-money/get-your-money-on-track',
              'Money Smart',
              'RESULTS_Q1_LINK_1'
            )}
            website for some great tips and hints, including budgeting tools
            that can help you identify expenses that you can cut back on in
            order to build a savings buffer.
          </li>
          <li>
            If you’re living on a low income and need some help with a financial
            emergency, you might qualify for a
            {createLink(
              'http://goodshepherdmicrofinance.org.au/services/no-interest-loan-scheme-nils/',
              'No Interest Loan',
              'RESULTS_Q1_LINK_2'
            )}
            or a low interest
            {createLink(
              'http://goodshepherdmicrofinance.org.au/services/stepup-loan/',
              'StepUP',
              'RESULTS_Q1_LINK_3'
            )}
            loan from
            {createLink(
              'http://goodshepherdmicrofinance.org.au/compare-loans/',
              'Good Shepherd Microfinance',
              'RESULTS_Q1_LINK_3'
            )}
            , supported by NAB.
          </li>
        </ul>
      ]
    case 1:
      /* QUESTION 2 */
      if (multipleAnswers === 'I had no access to any form of credit/loans') {
        return [
          generatePieChart(0, statistic),
          <p key="RESULTS_Q2_P1">
            <p>
              For every 100 Australians, there’s another 25 like you. Having
              no access to credit can leave you in a tight place when things
              go wrong.
            </p>
            <p>
              For people living on low incomes,
              {createLink(
                'http://goodshepherdmicrofinance.org.au/compare-loans/',
                'Good Shepherd Microfinance',
                'RESULTS_Q1_LINK_1a'
              )}
              has partnered with NAB and the federal government to provide
              access to fair and affordable credit for essential household
              items.
            </p>
          </p>
        ]
      }

      if (thisResult.length - 1 !== iterator) {
        if (multipleAnswers === 'I used fringe credit (loan from non-bank credit provider or pawn broker)') {
          return [
            generatePieChart(1, statistic),
            <p key="RESULTS_Q2_P1">
              Fringe lenders can provide quick access to credit in an emergency
              but they can also be an expensive form of credit.
            </p>,
            <p key="RESULTS_Q2_P2">
              Here’s some tips:
            </p>,
            <ul key="RESULTS_Q2_P3">
              <li>
                {createLink(
                  'http://www.doingittough.info/Your-Banks-Hardship-Team',
                  'Call your bank',
                  'RESULTS_Q2_LINK_1'
                )}
                if you’re struggling to make repayments on loans
                including credit cards and mortgages. They can work out the best
                action to take to help you manage your situation such as
                temporarily suspending or lowering your payments.
              </li>
              <li>
                Utilities and telecommunications companies also have hardship
                programs so if you’re having trouble paying a bill such as your
                mobile and electricity bill, contact your provider as soon as
                possible to discuss your options.
              </li>
              <li>
                If you are on a low income, you might want to check out a no or
                low interest loan from
                {createLink(
                  'http://goodshepherdmicrofinance.org.au/compare-loans/',
                  'Good Shepherd Microfinance',
                  'RESULTS_Q2_LINK_2'
                )}
                with the support of NAB.
              </li>
              <li>
                Centrelink may be able to provide you with income support even
                if you do not receive a Centrelink payment. A list of Centrelink
                contact numbers is available
                {createLink(
                  'https://www.humanservices.gov.au/individuals/contact-us/phone-us',
                  'here',
                  'RESULTS_Q2_LINK_3'
                )}
                .
              </li>
            </ul>
          ]
        }

        if (multipleAnswers === 'I used informal credit (loan from friends or family)') {
          return [
            generatePieChart(2, statistic),
            <p key="RESULTS_Q3_P1">
              75% of adults in Australian said they can access credit when they
              need it. Access to credit is essential for helping to manage
              life’s unplanned surprises.
            </p>
          ]
        }

        if (multipleAnswers === 'I used formal credit (loan from bank, building society, community finance, or Centrelink)') {
          return [
            generatePieChart(3, statistic),
            <p key="RESULTS_Q4_P1">
              75% of adults in Australian said they can access credit when they
              need it. Access to credit is essential for helping to manage
              life’s unplanned surprises.
            </p>
          ]
        }
      }

      return [
        generatePieChart(4, statistic),
        <p key="RESULTS_Q5_P1">
          75% of adults in Australian said they can access credit when they need
          it. Access to credit is is essential for helping to manage life’s
          unplanned surprises.
        </p>
      ]
    case 2:
      /* QUESTION 3 */
      /* NOTE: switch won't work in this case
        https://stackoverflow.com/questions/24843363/is-it-possible-to-use-contains-in-a-switch-statement
      */

      if (multipleAnswers === 'None of these') {
        return [
          <p key="RESULTS_Q3_P1">
            It sounds like you could do with some help. Why don’t you call a
            financial counsellor to see if they can help you with budgeting and
            managing debts? Call Financial Counselling Australia on
            {createLink(
              'tel:+611800007007',
              '1800 007 007',
              'RESULTS_Q3_LINK_1'
            )}
            .
          </p>
        ]
    	}

    	if (thisResult.length - 1 !== iterator) {
    		return generatePieChart(iterator, statistic);
    	}

      return [
    		generatePieChart(iterator, statistic),
        <div>
          <p>
            Well Done. Taking positive steps to manage your money is a great way
            to safeguard your finances and build financial resilience.
          </p>
        </div>
      ]
    case 3:
      /* QUESTION 4 */
      switch (singleAnswer) {
        case 'Never/very unlikely':
        case 'Unlikely':
        case 'Fairly unlikely':
        case 'Unsure':
          return [
            <p key="RESULTS_Q4_P1">
              Almost a quarter of Australians rated their ability to get
              financial help from their social connections as never or very
              unlikely.
            </p>,
            <p key="RESULTS_Q4_P2">
              Having people to call on, be that friends, family or government
              and community support services is an important part of being
              financially resilient.
            </p>,
            <p key="RESULTS_Q4_P3">
              Check out
              {createLink(
                'https://www.moneysmart.gov.au/managing-your-money/get-your-money-on-track',
                'Money Smart',
                'RESULTS_Q4_LINK_1'
              )}
              for some tips on the supports that might be available to you
              including financial counselling, legal advice, community supports
              and government support.
            </p>,
            <p key="RESULTS_Q4_P4">
              The good news is that there’s support on hand. Check out the
              support services available to you <Link to="/support">here</Link>.
            </p>
          ]
        case 'Fairly likely':
        case 'Always/very likely':
          return [
            <p key="RESULTS_Q4_P5">
              Like you, 28% of adults in Australia said it would be fairly
              likely they could call on social connections if they needed
              financial support.
            </p>
          ]
        default:
          return 'error'
      }
    default:
      console.info('DEFAULT')
  }
  return <p>Waiting for results...</p>
}

export default ResultsCopy
