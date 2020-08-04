import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

type Props = {
  component: React.FC
}

const RenderComponentWithTheme: React.FC<any> = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.component}
    </ThemeProvider>
  )
}

export default RenderComponentWithTheme
