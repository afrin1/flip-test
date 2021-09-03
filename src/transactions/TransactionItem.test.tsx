import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TransactionItem from './TransactionItem';

it('renders correctly', () => {
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
  renderer.create(<TransactionItem item={item} />);
});

//green color box
//orange box
//success button - testID
//pending button - testId
