import styled, { css } from "styled-components";

const shadowCss = css`
            -webkit-box-shadow: 0px 5px 12px -1px rgba(0,0,0,0.45);
            -moz-box-shadow: 0px 5px 12px -1px rgba(0,0,0,0.45);
            box-shadow: 0px 5px 12px -1px rgba(0,0,0,0.45);
          `

export const GraphStyledContainer = styled.div<{ shadow?: boolean, borderRadius?: number }>`
  width: 100%;
  height: 100%;
  padding: 20px 10px 0;
  border-radius: ${props => `${props.borderRadius}px`};
  ${props => props?.shadow && shadowCss}
`
