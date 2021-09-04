import { render } from '@testing-library/react-native'
import React from 'react'
import TransactionDetail from '../TransactionDetail'

describe('Transaction Detail', () => {
  const data = {
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

  it('should match snapshot', () => {
    expect(render(<TransactionDetail route={{ params: data }} />)).toMatchSnapshot()
  })

  it('should show "No data" text when params is null', () => {
    const { getByText } = render(<TransactionDetail route={{ params: null as any }} />)

    expect(getByText('No data')).not.toBeNull()
  })

  it('should show "No data" text when params is an empty object', () => {
    const { getByText } = render(<TransactionDetail route={{ params: {} as any }} />)

    expect(getByText('No data')).not.toBeNull()
  })

  it('should display transaction detail view when correct data is passed', () => {
    const { getByTestId } = render(<TransactionDetail route={{ params: data }} />)

    expect(getByTestId('transaction-detail-view')).not.toBeNull()
  })
})