import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => {
  let copyrightDate = new Date()
  return (
    <StyledFooter>
      Copyright ReverendHeat {copyrightDate.getFullYear()}
    </StyledFooter>
  )
}
