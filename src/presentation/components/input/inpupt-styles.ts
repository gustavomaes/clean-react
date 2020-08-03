import styled from 'styled-components'

export const InputField = styled.input`
  border: 1px solid ${p => p.theme.colors.primaryLight};
  line-height: 40px;
  border-radius: 4px;
  padding: 0 40px 0 8px;
  &:focus {
    outline: ${p => p.theme.colors.primaryLight};
  };
`

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  
  ${InputField} {
    flex-grow: 1;
  };
`

export const Status = styled.span`
  position: absolute;
  right: 8px; 
  font-size: 12px;
  cursor: help;
`
