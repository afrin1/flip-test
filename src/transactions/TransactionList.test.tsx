import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TransactionList from './TransactionList';
import { Transaction } from './types';

describe('Transaction List', () => {
  const data: Transaction[] = [{
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
  },
  {
    id: "FT41413",
    amount: 2847587,
    uniqueCode: 651,
    status: "PENDING",
    senderBank: "bni",
    accountNumber: "581822166",
    beneficiaryName: "Rhiannan Simmons",
    beneficiaryBank: "btpn",
    remark: "sample remark",
    createdAt: "2021-08-26 11:49:49",
    completedAt: "2021-09-02 20:49:49",
  }]
  it('should match snapshot', () => {
    expect(render(<TransactionList data={data} />)).toMatchSnapshot()
  })

  it('should contain two Transaction Items when data has 2 items', () => {
    const { queryAllByTestId } = render(<TransactionList data={data} />)
    expect(queryAllByTestId('transaction-item')).toHaveLength(2)
  })

  it('should not contain two Transaction Items when data is empty', () => {
    const { queryAllByTestId } = render(<TransactionList data={[]} />)
    expect(queryAllByTestId('transaction-item')).toHaveLength(0)
  })
})
