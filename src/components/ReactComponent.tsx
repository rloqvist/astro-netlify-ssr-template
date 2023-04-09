import styled from "styled-components"
import {prop} from "styled-tools"

export const StyledReactComponent = div`
  color: ${prop("color")};
`

export const ReactComponent = ({someProp}) => {
  return (
    <StyledReactComponent color="purple">
      Your react prop is: {someProp}
    </StyledReactComponent>
  )
}
