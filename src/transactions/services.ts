import axios from "axios"
import { getDate_DD_MONTH_YYYY } from "../utils/utils"
import { Transaction } from "./types"

export const TRANSACTIONS_API = 'https://nextar.flip.id/frontend-test'

export const fetchTransactions = async (): Promise<Transaction[]> => {
  var list: Transaction[] = []
  await axios.get(TRANSACTIONS_API)
    .then((response) => {
      list = getTransactionListFromResponse(response.data)
    })
    .catch((error) => {
      console.error(`Fetch failed: ${error}`)
    })
  return list
}

const getTransactionListFromResponse = (transactions: any): Transaction[] => {
  const list: Transaction[] = []

  Object.keys(transactions).map((item: any) => {
    const perTransaction = transactions[item]
    const transaction: Transaction = {
      id: perTransaction.id,
      amount: perTransaction.amount,
      uniqueCode: perTransaction.unique_code,
      status: perTransaction.status,
      senderBank: perTransaction.sender_bank,
      accountNumber: perTransaction.account_number,
      beneficiaryName: perTransaction.beneficiary_name,
      beneficiaryBank: perTransaction.beneficiary_bank,
      remark: perTransaction.remark,
      createdAt: getDate_DD_MONTH_YYYY(perTransaction.created_at),
      completedAt: perTransaction.completed_at,
    }
    list.push(transaction)
  })

  return list
}