// @flow
import styled from 'styled-components'

const Card = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  box-shadow: 8px 8px 19px 0px rgba(0, 0, 0, 0.55);
  background-color: #f1f3f4;
  width: 100%;
  max-width: 960px;

  a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

export default Card
