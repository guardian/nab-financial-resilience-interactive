// @flow
import React from 'react'
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

/* const q2aComponent = [
  <p key="RESULTS_Q2a_P1">
    For every 100 Australians, there’s another 25 like you. Having no access to
    credit can leave you in a tight place when things go wrong.
  </p>,
  <p key="RESULTS_Q2a_P2">
    For people living on low incomes,
    {createLink(
      'http://goodshepherdmicrofinance.org.au/compare-loans/',
      'Good Shepherd Microfinance',
      'RESULTS_Q2_LINK_1'
    )}
    has partnered with NAB and the federal government to provide access to fair
    and affordable credit for essential household items.
  </p>
] */
/* eslint-disable max-len */
/* const q2bComponent = [
  <p key="RESULTS_Q2b_P1">
    Fringe lenders can provide quick access to credit in an emergency but they
    can also be an expensive form of credit.
  </p>,
  <p key="RESULTS_Q2b_P2">
    If you’re doing it tough and need credit, there are options including:
  </p>,
  <ol key="RESULTS_Q2b_P3">
    <li>
      Call your bank if you’re struggling to make repayments on loans including
      credit cards and mortgages. They can work out the best action to take to
      help you manage your situation such as temporarily suspending or lowering
      your payments.
    </li>
    <li>
      Utilities and telecommunications companies also have hardship programs so
      if you’re having trouble paying a bill such as your mobile and electricity
      bill, contact your provider as soon as possible to discuss your options.
    </li>
    <li>
      If you are on a low income, you might want to check out a no or low
      interest loan from Good Shepherd Microfinance with the support of NAB.
    </li>
    <li>
      Centrelink may be able to provide you with income support even if you do
      not receive a Centrelink payment. A list of Centrelink contact numbers is
      available here.
    </li>
  </ol>
]

const q2cComponent = [
  <p key="RESULTS_Q2c_P1">
    21% of Australians can access credit when they need it. This is essential
    for helping to manage life’s unplanned surprises.
  </p>
]

const q2dComponent = [
  <p key="RESULTS_Q2d_P1">
    45% of Australians can access credit when they need it. This is essential
    for helping to manage life’s unplanned surprises.
  </p>
]
const q2eComponent = [
  <p key="RESULTS_Q2e_P1">
    25% of Australians can access credit when they need it. This is essential
    for helping to manage life’s unplanned surprises.
  </p>
] */

/* const q3AnswerMatrix = [
  {
    value: 'Followed a budget',
    component: q2aComponent
  },
  {
    value: 'Saved regularly',
    component: q2bComponent
  },
  {
    value: 'Paid more than minimum home loan payments',
    component: q2cComponent
  },
  {
    value: 'Made voluntary contributions towards supperannuation',
    component: q2dComponent
  },
  {
    value:
      'Received financial information counselling or advice from a professional',
    component: q2eComponent
  }
] */

/* const getResults = userAnswer =>
  q3AnswerMatrix.find(a => a.value === userAnswer) */

const ChartWrapper = styled.div`
  height: 300px;
  max-width: 100%;
  margin: 0 auto;
`

const generatePieChart = (i, data) => (
  <ChartWrapper key={`RESULTS_Q_2_CHART_${i}`}>
    <VictoryPie
      colorScale={['#09B24F', 'rgba(9,178,79,0.2)']}
      data={[{ x: 'You', y: data[i] }, { x: null, y: 100 - data[i] }]}
      style={{
        labels: {
          fill: 'black',
          fontFamily: 'Display Sans',
          fontSize: 32,
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
            Congratulations! You’re among the 80% Australians who can raise
            $2000 in an emergency.
          </p>
        ]
      }
      return [
        generatePieChart(1, statistic),
        <p key="RESULTS_Q1_P1">
          You’re not alone. Around 1 in 5 Australians report having limited to
          no savings.
        </p>,
        <p key="RESULTS_Q1_P2">
          To start saving, visit the
          {createLink(
            'https://www.moneysmart.gov.au/managing-your-money/get-your-money-on-track',
            'Money Smart',
            'RESULTS_Q1_LINK_1'
          )}
          website for some great tips and hints, including budgeting tools that
          can help you identify expenses that you can cut back on in order to
          build a savings buffer.
        </p>,
        <p key="RESULTS_Q1_P3">
          If you’re living on a low income and need some help with a financial emergency, you might qualify for a
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
        </p>
      ]
    case 1:
      /* QUESTION 2 */
      switch (singleAnswer) {
        case 'I had no access to any form of credit.':
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
        case 'I used fringe credit (payday loan).':
          return [
            generatePieChart(1, statistic),
            <p key="RESULTS_Q2_P1">
              Fringe lenders can provide quick access to credit in an emergency
              but they can also be an expensive form of credit.
            </p>,
            <p key="RESULTS_Q2_P2">
              If you’re doing it tough and need credit, there are options
              including:
            </p>,
            <ol>
              <li>
                {createLink(
                  'http://www.doingittough.info/Your-Banks-Hardship-Team',
                  'Call your bank',
                  'RESULTS_Q2_LINK_1'
                )}
                if you’re struggling to make repayments on loans including
                credit cards and mortgages. They can work out the best action to
                take to help you manage your situation such as temporarily
                suspending or lowering your payments.
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
                )}.
              </li>
            </ol>
          ]
        case 'I used informal credit (friend/family).':
          return [
            generatePieChart(2, statistic),
            <p>
              21% of Australians can access credit when they need it. This is
              essential for helping to manage life’s unplanned surprises.
            </p>
          ]
        case 'I used formal credit (bank/building society).':
          return [
            generatePieChart(3, statistic),
            <p>
              45% of Australians can access credit when they need it. This is
              essential for helping to manage life’s unplanned surprises.
            </p>
          ]
        case 'I used formal credit asset building (investment).':
          return [
            generatePieChart(4, statistic),
            <p>
              25% of Australians can access credit when they need it. This is
              essential for helping to manage life’s unplanned surprises.
            </p>
          ]
        default:
          return <p>error</p>
      }
    case 2:
      /* QUESTION 3 */
      /* NOTE: switch won't work in this case
        https://stackoverflow.com/questions/24843363/is-it-possible-to-use-contains-in-a-switch-statement
      */

      if (multipleAnswers === 'None of the above') {
        return [
          <p key="RESULTS_Q3_P1">
            It&apos;s never too late to take the first step. Visit
            {createLink(
              'https://www.moneysmart.gov.au/managing-your-money/get-your-money-on-track',
              'Money Smart',
              'RESULTS_Q3_LINK_1'
            )}
            for some ways to get your money on track.
          </p>,
          <p key="RESULTS_Q3_P2">
            You may also want to call a financial counsellor to see if they can
            help you with budgeting and managing debts? Call 1800 007 007.
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
            Well done! Taking positive steps to manage your money is a great way
            to build financial resilience.
          </p>
          <p>
            For more tips on managing your money visit the Money Smart website.
          </p>{' '}
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
              If you are feeling distressed
              {createLink(
                'https://www.lifeline.org.au/',
                'Lifeline',
                'RESULTS_Q4_LINK_2'
              )}
              or
              {createLink(
                'https://www.beyondblue.org.au/',
                'Beyond Blue',
                'RESULTS_Q4_LINK_3'
              )}
              are here to help.
            </p>
          ]
        case 'Fairly likely':
        case 'Always/very likely':
          return [
            <p key="RESULTS_Q4_P5">It’s great to have people to lean on.</p>,
            <p key="RESULTS_Q4_P6">
              We are lucky to live in a country where over 75% of us have people
              and services to call on when we need support.
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
