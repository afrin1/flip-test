import { Transaction } from "../transactions/types"

export const isMatchingSearchText = (item: Transaction, searchText: string): boolean => {
  return (item.beneficiaryName.toLowerCase().includes(searchText)
    || item.senderBank.toLowerCase().includes(searchText)
    || item.beneficiaryBank.toLowerCase().includes(searchText)
    || item.amount.toString().toLowerCase().includes(searchText))
}
