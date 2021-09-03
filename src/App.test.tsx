import React from 'react'
import App from '../src/App'
import { render } from '@testing-library/react-native'

describe('App', () => {
  it('should match snapshot', () => {
    expect(render(<App />)).toMatchSnapshot()
  })
})
