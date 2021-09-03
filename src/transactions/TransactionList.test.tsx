import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TransactionList from './TransactionList';
import { Transaction } from './types';

describe('Transaction List', () => {

  it('renders correctly', () => {
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
    }
    ]
    renderer.create(<TransactionList data={data} />);
  });

  // it('should call Transaction Item twice with correct item when API returns response', () => {

  // })

  // it('should not call Transaction Item when API returns error', () => {

  // })
})
