import styled from 'styled-components'
import Button from 'material-ui/Button'
import withRoot from '../lib/material-ui/withRoot'

const Red = styled.span`
  color: red;
`

const Index = () =>
  <div>
    <p><Red>Hello</Red> from Next.js</p>
    <Button variant="raised">
      Click Me
    </Button>
  </div>

export default withRoot(Index)
