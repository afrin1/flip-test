import { Transaction } from "../transactions/types";

export const sortA_Z = (list: Transaction[], key: string): Transaction[] => {
  const newList = [...list]
  return newList.sort((a: Transaction, b: Transaction) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  })
}

export const sortZ_A = (list: Transaction[], key: string): Transaction[] => {
  const newList = [...list]
  return newList.sort((a, b) => {
    if (a[key] < b[key]) return 1;
    if (a[key] > b[key]) return -1;
    return 0;
  })
}

export const sortDateNewest = (list: Transaction[]): Transaction[] => {
  const newList = [...list]
  return newList.sort((a, b) => {
    const aDate = Date.parse(a.createdAt)
    const bDate = Date.parse(b.createdAt)
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  })
}

export const sortDateOldest = (list: Transaction[]): Transaction[] => {
  const newList = [...list]
  return newList.sort((a, b) => {
    const aDate = Date.parse(a.createdAt)
    const bDate = Date.parse(b.createdAt)
    if (aDate > bDate) return 1;
    if (aDate < bDate) return -1;
    return 0;
  })
}