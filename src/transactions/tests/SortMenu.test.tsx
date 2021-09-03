import { render } from '@testing-library/react-native'
import React from 'react'
import SortMenu, { sortOptions } from '../SortMenu'

describe('SortMenu', () => {
  const setMenuCloseMock = jest.fn()
  const onOptionSelectionMock = jest.fn()

  it('should match snapshot', () => {
    expect(render(
      <SortMenu
        setMenuClose={setMenuCloseMock}
        onOptionSelection={onOptionSelectionMock}
        selectedOption={sortOptions.Nama_A_Z} />)
    ).toMatchSnapshot()
  })

  it(`Radio button should display the default value 
    as "Nama_A_Z"`, () => {
    const { getByTestId } = render(
      <SortMenu
        setMenuClose={setMenuCloseMock}
        onOptionSelection={onOptionSelectionMock}
        selectedOption={sortOptions.Nama_A_Z} />)

    expect(getByTestId('sort-radio-buttons'))
      .toHaveProp('defaultValue', sortOptions.Nama_A_Z)
  })

  it(`should have onOptionSelection callback set correctly`, () => {
    const { getByTestId } = render(
      <SortMenu
        setMenuClose={setMenuCloseMock}
        onOptionSelection={onOptionSelectionMock}
        selectedOption={sortOptions.Nama_A_Z} />)

        expect(getByTestId('sort-radio-buttons'))
        .toHaveProp('onSelection', onOptionSelectionMock)
  })
})