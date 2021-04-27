import React from 'react'
import styled from 'styled-components'

//Single file styling example
import * as S from "../styles/styles";

//Component based styling
const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => {
  let copyrightDate = new Date()
  return (
    <S.Footer>
      Copyright ReverendHeat {copyrightDate.getFullYear()}
    </S.Footer>
  )
}
