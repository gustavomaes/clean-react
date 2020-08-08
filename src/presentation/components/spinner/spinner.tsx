import React from 'react'
import { SpinnerWrapper } from './spinner-styles'

type SpinnerProps = {
  marginTop?: boolean
}

const Spinner: React.FC<SpinnerProps> = ({ marginTop }: SpinnerProps) => (
  <SpinnerWrapper data-testid="spinner" marginTop={marginTop}>
    <div /><div /><div /><div />
  </SpinnerWrapper>
)

export default Spinner
