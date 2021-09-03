import { waitFor } from '@testing-library/react-native';
import axios from 'axios';
import { fetchTransactions, TRANSACTIONS_API } from './services'

describe('Repository', () => {
  it('should call axios.get with a valid url', () => {
    const axiosSpy = jest.spyOn(axios, 'get')

    fetchTransactions()

    expect(axiosSpy).toBeCalledWith(TRANSACTIONS_API)
  })

  it('should return transactionlist when successfull', async () => {
    const responseData = {
      FT83023: {
        id: "FT83023",
        amount: 3264294,
        unique_code: 346,
        status: "SUCCESS",
        sender_bank: "bni",
        account_number: "9950491418",
        beneficiary_name: "Rhiannan Simmons",
        beneficiary_bank: "btpn",
        remark: "sample remark",
        created_at: "2021-09-03 14:51:13",
        completed_at: "2021-09-03 14:51:13",
        fee: 0
      },
      FT69308: {
        id: "FT69308",
        amount: 876617,
        unique_code: 897,
        status: "SUCCESS",
        sender_bank: "bni",
        account_number: "6519066406",
        beneficiary_name: "Jake Castillo",
        beneficiary_bank: "muamalat",
        remark: "sample remark",
        created_at: "2021-09-04 14:50:13",
        completed_at: "2021-09-04 14:51:13",
        fee: 0
      }
    }

    const expectedResult = [{
      id: "FT83023",
      amount: 3264294,
      uniqueCode: 346,
      status: "SUCCESS",
      senderBank: "bni",
      accountNumber: "9950491418",
      beneficiaryName: "Rhiannan Simmons",
      beneficiaryBank: "btpn",
      remark: "sample remark",
      createdAt: "3 September 2021",
      completedAt: "2021-09-03 14:51:13",
    },
    {
      id: "FT69308",
      amount: 876617,
      uniqueCode: 897,
      status: "SUCCESS",
      senderBank: "bni",
      accountNumber: "6519066406",
      beneficiaryName: "Jake Castillo",
      beneficiaryBank: "muamalat",
      remark: "sample remark",
      createdAt: "4 September 2021",
      completedAt: "2021-09-04 14:51:13",
    }]

    const response = { status: 200, data: responseData }
    jest.spyOn(axios, 'get').mockResolvedValue(response)

    const result = await fetchTransactions()

    await waitFor(() => expect(result).toEqual(expectedResult))
  })

  it('should return an empty array when there is error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error())

    const result = await fetchTransactions()

    await waitFor(() => expect(result).toEqual([]))
  })
})