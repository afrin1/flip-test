import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SearchBar from '../SearchBar'

describe('Search Bar', () => {

  const onTextChangedMock = jest.fn()
  const onButtonPressedMock = jest.fn()

  it('should match snapshot', () => {
    expect(render(<SearchBar 
      onTextChanged={onTextChangedMock}
      onButtonPressed={onButtonPressedMock}
      text={'Sample text'}
      />)).toMatchSnapshot()
  })

  it('should display the passed text', () => {
    const { getByTestId} = render(<SearchBar 
      onTextChanged={onTextChangedMock}
      onButtonPressed={onButtonPressedMock}
      text={'Sample Text'} />)

      expect(getByTestId('search-input')).toHaveProp('value', 'Sample Text')
  })

  it('should invoke the passed onTextChanged callback when input is typed', () => {
    const { getByTestId} = render(<SearchBar 
      onTextChanged={onTextChangedMock}
      onButtonPressed={onButtonPressedMock}
      text={'Sample Text'} />)

    fireEvent.changeText(getByTestId('search-input'), 'test')

    expect(onTextChangedMock).toBeCalled()
  })

  it('should invoke the onButtonPressed callback when Sort button is pressed', () => {
    const { getByTestId} = render(<SearchBar 
      onTextChanged={onTextChangedMock}
      onButtonPressed={onButtonPressedMock}
      text={'Sample Text'} />)

    fireEvent.press(getByTestId('sort-button'))

    expect(onButtonPressedMock).toBeCalled()
  })
})
