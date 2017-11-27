// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { COLOURS } from '../../styles'

/* eslint-disable react/no-unused-prop-types */
/* NOTE: handleClick is used within arrow function */
type Props = {
  checkboxID: string,
  handleCheckboxChange: Function,
  label: string,
  checked: Boolean,
  isChecked: Boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: block;
`

const Input = styled.input`display: none;`

const Icon = styled.label`
  flex-grow: 0;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`
const Label = styled.label`
  flex-grow: 1;
  align-self: center;
  color: ${props => (props.checked ? 'black' : 'grey')}
  &:hover {
    cursor: pointer;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

class CheckBox extends Component<Props> {
  props: Props

  toggleCheckboxChange = () => {
    this.props.handleCheckboxChange(this.props.label, this.props.checkboxID)
  }
  render() {
    return (
      <Wrapper>
        <Row>
          <Label>
            <label htmlFor={this.props.label}>
              <Input
                type="checkbox"
                value={this.props.label}
                checked={this.props.isChecked}
                onChange={this.toggleCheckboxChange}
                id={this.props.checkboxID}
              />

              {this.props.label}
            </label>
          </Label>

          <Icon htmlFor={this.props.label}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.85 41.93"
              width="40"
            >
              <g>
                <path
                  d="M34.09,0H3.77A3.78,3.78,0,0,0,0,3.79V28.51a3.79,3.79,0,0,0,1.76,3.21l15.15,9.63a3.76,3.76,0,0,0,4,0l15.15-9.63a3.8,3.8,0,0,0,1.76-3.2V3.79A3.78,3.78,0,0,0,34.09,0Zm2.38,28.51a2.38,2.38,0,0,1-1.11,2L20.2,40.17a2.37,2.37,0,0,1-2.55,0L2.5,30.54a2.38,2.38,0,0,1-1.11-2V3.79A2.39,2.39,0,0,1,3.77,1.4H34.09a2.39,2.39,0,0,1,2.38,2.39Z"
                  fill={this.props.isChecked ? COLOURS.highlights : 'grey'}
                />
                <polygon
                  points="8.64 19.54 10.54 17.63 16.16 23.28 27.32 12.07 29.21 13.98 16.16 27.09 8.64 19.54"
                  fill={this.props.isChecked ? COLOURS.highlights : 'none'}
                />
              </g>
            </svg>
          </Icon>
        </Row>
      </Wrapper>
    )
  }
}
export default CheckBox
