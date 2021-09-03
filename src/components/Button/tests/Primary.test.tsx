import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import testID from '../../../utils/testID'
import Primary from '../Primary'

describe('Primary Button', () => {
  it('should match snapshot', () => {
    expect(render(
      <Primary title={'title'} onPress={jest.fn()} />)
    ).toMatchSnapshot()
  })

  it('should display the provided text', () => {
    const { getByText } = render(<Primary title={'title'} onPress={jest.fn()} />)
    expect(getByText('title')).not.toBeNull()
  })

  it('should invoke the provided callback when button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Primary 
      {...testID('primary-button')}
      title={'title'} 
      onPress={onPressMock} />
    )

    fireEvent.press(getByTestId('primary-button'))
    expect(onPressMock).toBeCalled()
  })
})