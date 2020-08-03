import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Error = styled.span`
  margin-top: 32px;
  color: ${p => p.theme.colors.primaryLight};
`
