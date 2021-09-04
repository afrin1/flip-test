import { render } from '@testing-library/react-native'
import React from 'react'
import TransactionDetail from '../TransactionDetail'

describe('Transaction Detail', () => {
  it('should match snapshot', () => {
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
    expect(render(<TransactionDetail route={{ params: {...data} }} />)).toMatchSnapshot()
  })
})