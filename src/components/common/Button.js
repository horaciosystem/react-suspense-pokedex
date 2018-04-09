import styled from "styled-components"
import theme from "theme"

export default styled.button`
  align-items: center;
  background-color: ${theme.color.deepPurple};
  border-radius: 2px;
  color: ${theme.color.white};
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.007px;
  margin: auto 4px;
  min-width: 78px;
  outline: none;
  padding: 8px 6px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.color.purpleLighten};
  }
`
