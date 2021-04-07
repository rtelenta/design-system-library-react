import React from 'react'
import showCodeByDefault from './showCodeByDefault'
import { GlobalStyles } from 'twin.macro'
import '../src/storybook.css'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

showCodeByDefault()
