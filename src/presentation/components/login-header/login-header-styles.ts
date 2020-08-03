import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.primary};
  border-top: 40px solid ${p => p.theme.colors.primaryDark};
  align-items: center;
`

export const Title = styled.h1`
  color: ${p => p.theme.colors.white};
  margin: 16px 0 40px;
`
