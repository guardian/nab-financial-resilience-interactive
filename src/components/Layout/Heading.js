// @flow
import styled from 'styled-components'
import { COLOURS } from '../../styles'

type Props = {
  inverted?: boolean
};

const Heading = styled.h1`
  color: ${(props: Props) => props.inverted ? COLOURS.bodyCopy.inverted : COLOURS.bodyCopy.default};
  font-size: 1.7rem;
  line-height: 1em;
`

export default Heading
