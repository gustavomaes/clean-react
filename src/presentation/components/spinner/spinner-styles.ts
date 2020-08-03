import styled, { keyframes } from 'styled-components'

const spinner1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const spinner3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const spinner2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

type Props = {
  marginTop?: boolean
}

export const SpinnerWrapper = styled.div<Props>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 13px;
  ${p => p.marginTop && 'margin-top: 32px;'};

  div {
    position: absolute;
    top: 0px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #bc477b;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
    left: 8px;
    animation: ${spinner1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ${spinner2} 0.6s infinite;
    }
    &:nth-child(3) {
      left: 32px;
      animation: ${spinner2} 0.6s infinite;
    }
    &:nth-child(4) {
      left: 56px;
      animation: ${spinner3} 0.6s infinite;
    }
  }
`
