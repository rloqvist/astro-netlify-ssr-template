import styled from "styled-components"
import {prop} from "styled-tools"

export const StyledReactComponent = styled.div`
  color: ${prop("color")};
`

export const ReactComponentCSR = ({someProp}) => {
  return (
    <StyledReactComponent color="purple">
      Your react prop is: {someProp}
    </StyledReactComponent>
  )
}
