import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import 'react-native'
import { colors } from '../../theme'
import TransactionItem from '../TransactionItem'
import { Status } from '../types'

describe('Transaction Item', () => {
  const item = {
    id: "FT2366",
    amount: 2629107,
    uniqueCode: 726,
    status: "SUCCESS",
    senderBank: "bni",
    accountNumber: "8379706095",
    beneficiaryName: "Sammy-Jo Mccall",
    beneficiaryBank: "bca",
    remark: "sample remark",
    createdAt: "2021-09-02 20:49:49",
    completedAt: "2021-09-02 20:49:49",
  }
  const navigate = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  it('should match snapshot', () => {
    expect(render(<TransactionItem
      item={item}
      navigation={{ navigate }} />)).toMatchSnapshot()
  })

  it('should display green color box when the status="SUCCESS"', () => {
    const { getByTestId } = render(<TransactionItem
      item={item}
      navigation={{ navigate }} />)
    expect(getByTestId('sidebar')).not.toBeNull()
    expect(getByTestId('sidebar')).toHaveStyle({ backgroundColor: colors.SUCCESS })
  })

  it('should display orange color box when the status="PENDING"', () => {
    const { getByTestId } = render(
      <TransactionItem
        item={{ ...item, status: Status.PENDING }}
        navigation={{ navigate }} />
    )
    expect(getByTestId('sidebar')).not.toBeNull()
    expect(getByTestId('sidebar')).toHaveStyle({ backgroundColor: colors.PENDING })
  })

  it('should display success button when the status="SUCCESS"', () => {
    const { getByTestId, queryByTestId } = render(
      <TransactionItem item={item} navigation={{ navigate }} />
    )
    expect(getByTestId('success-button')).not.toBeNull()
    expect(queryByTestId('pending-button')).toBeNull()
  })

  it('should display pending button when the status="PENDING"', () => {
    const { getByTestId, queryByTestId } = render(
      <TransactionItem
        item={{ ...item, status: Status.PENDING }}
        navigation={{ navigate }} />
    )
    expect(getByTestId('pending-button')).not.toBeNull()
    expect(queryByTestId('success-button')).toBeNull()
  })

  it('should navigate to transaction detail page when success button is clicked', () => {
    const { getByTestId } = render(
      <TransactionItem
        item={item}
        navigation={{ navigate }} />
    )
    fireEvent.press(getByTestId('success-button'))
    expect(navigate).toBeCalledTimes(1)
    expect(navigate).toBeCalledWith('TransactionDetail', item)
  })

  it('should navigate to transaction detail page when pending button is clicked', () => {
    const { getByTestId } = render(
      <TransactionItem
        item={{ ...item, status: Status.PENDING }}
        navigation={{ navigate }} />
    )
    fireEvent.press(getByTestId('pending-button'))
    expect(navigate).toBeCalledTimes(1)
    expect(navigate).toBeCalledWith('TransactionDetail', { ...item, status: Status.PENDING })
  })
})
