export type Transaction = {
  id: string,
  amount: number,
  uniqueCode: number,
  status: string,
  senderBank: string,
  accountNumber: string,
  beneficiaryName: string,
  beneficiaryBank: string,
  remark: string,
  createdAt: string,
  completedAt: string,
}