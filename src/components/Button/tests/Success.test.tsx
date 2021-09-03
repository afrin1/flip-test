import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import testID from '../../../utils/testID'
import Success from '../Success'

describe('Success Button', () => {
  it('should match snapshot', () => {
    expect(render(
      <Success title={'title'} onPress={jest.fn()} />)
    ).toMatchSnapshot()
  })

  it('should display the provided text', () => {
    const { getByText } = render(<Success title={'title'} onPress={jest.fn()} />)
    expect(getByText('title')).not.toBeNull()
  })

  it('should invoke the provided callback when button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Success 
      {...testID('success-button')}
      title={'title'} 
      onPress={onPressMock} />
    )

    fireEvent.press(getByTestId('success-button'))
    expect(onPressMock).toBeCalled()
  })
})