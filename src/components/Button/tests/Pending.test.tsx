import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import testID from '../../../utils/testID'
import Pending from '../Pending'

describe('Pending Button', () => {
  it('should match snapshot', () => {
    expect(render(
      <Pending
        title={'title'}
        onPress={jest.fn()} />)
    ).toMatchSnapshot()
  })

  it('should display the provided text', () => {
    const { getByText } = render(<Pending
      title={'title'}
      onPress={jest.fn()} />)
    expect(getByText('title')).not.toBeNull()
  })

  it('should invoke the provided callback when button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Pending
        {...testID('pending-button')}
        title={'title'}
        onPress={onPressMock} />
    )

    fireEvent.press(getByTestId('pending-button'))
    expect(onPressMock).toBeCalled()
  })
})