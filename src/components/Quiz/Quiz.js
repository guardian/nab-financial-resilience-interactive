// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import CheckBox from './CheckBox'
import Card from '../Card'
import ResultsContainer from '../../containers/ResultsContainer'
import { COLOURS } from '../../styles'

import { NextButton } from '../NextButton'

/* eslint-disable */
type Props = {
  questionNumber: number,
  question: string,
  options: Array<string>,
  questions: Array<Object>,
  progress: number,
  totalQuestions: number,
  onIncrementProgress: Function,
  onQuizSubmit: Function
};

type State = {
  checked: Array<string> | null
};

const Wrapper = styled.div`
  width: 45rem;
  max-width: 100%;
  h1 {
    text-align: center;
  }
`

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

const Col = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  max-width: 100%;
  padding: 1em;
  @media (min-width: 720px) {
    flex-basis: 50%;
  }
`

const QuizIcon = styled.img`
  max-width: 290px;
  margin: 0 auto 1rem auto;
`

const GetResultsButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 60px;
  text-decoration: none;
  color: white;
  background-color: ${({ isDisabled }) =>
    isDisabled ? 'grey' : COLOURS.highlights};
  padding: 4px 20px;
  border-radius: 34px;
  font-size: 16px;
  align-items: center;
  text-align: left;
  margin: 2em auto;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const Copy = styled.p`
  padding-left: 6px;
  font-weight: bold;
`

class Quiz extends Component<Props> {
  state: State = {
    checked: null
  }

  componentWillMount = () => {
    this.selectedCheckboxes = []
  }

  props: Props

  questionNumber = this.props.progress + 1
  question = this.props.questions[this.props.progress].question
  questions = this.props.questions
  toggleCheckbox = (label: string, cancelsOthers: Boolean, wasChecked: Boolean) => {
	if (cancelsOthers) {
		this.selectedCheckboxes = [label];
	} else {
		if (this.selectedCheckboxes.includes('None of the above')) {
			this.selectedCheckboxes = [];
		}
		if (wasChecked) {
			var index = this.selectedCheckboxes.indexOf(label);
			if (index !== -1) {
				this.selectedCheckboxes.splice(index, 1);
			}
		} else {
			this.selectedCheckboxes.push(label);
		}
	}

    this.setState({
      checked: this.selectedCheckboxes
    })
  }

  handleFormSubmit = formSubmitEvent => {
    /* NOTE: breaks Link component routing */
    /* formSubmitEvent.preventDefault() */
    if (this.state.checked !== null) {
      this.props.onAnswerSubmit({
        question: this.props.progress,
        result: this.selectedCheckboxes
      })
      this.props.progress < this.props.totalQuestions - 1
        ? this.props.onIncrementProgress()
        : this.props.onQuizSubmit()
      this.selectedCheckboxes = []
      this.setState({
        checked: null
      })
    }
  }

  createCheckbox = (label: string, cancelsOthers: Boolean) => (
    <CheckBox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      isChecked={this.selectedCheckboxes.includes(label)}
      checkboxID={label}
      cancelsOthers={cancelsOthers}
    />
  )

  //createCheckboxes = () => this.props.options.map(this.createCheckbox)

	createCheckboxes = () => {
		let arr = [];
		let options = this.questions[this.props.progress].options;
		for(let i in options) {
			arr.push(this.createCheckbox(options[i].text, options[i].cancelsOthers));
		}
		return arr;
	}

  render() {
    if (this.props.quizComplete) {
      return <ResultsContainer />
    }
    return (
      <Wrapper>
        <h1>Question {this.props.progress + 1}</h1>
        <Row>
          <Col>
            <QuizIcon
              src={`${process.env.PUBLIC_URL}/icons/icon-question${this.props
                .progress + 1}.svg`}
              alt="icon"
            />
            <p>{this.questions[this.props.progress].question}</p>
          </Col>
          <Col>
            <Card>
              <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}
              </form>
            </Card>
          </Col>
        </Row>
        <Row>
          {this.props.progress < this.props.totalQuestions - 1 ? (
            <NextButton
              isDisabled={this.state.checked === null}
              handleClick={this.handleFormSubmit}
            />
          ) : (
            <GetResultsButton
              isDisabled={this.state.checked === null}
              onClick={this.handleFormSubmit}
            >
              Get Results
            </GetResultsButton>
          )}
        </Row>
      </Wrapper>
    )
  }
}

export default Quiz
