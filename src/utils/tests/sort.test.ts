import { Transaction } from "../../transactions/types"
import { sortA_Z, sortDateNewest, sortDateOldest, sortZ_A } from "../sort"

describe('Sort utils', () => {
  it('should return a sorted list A-Z', () => {
    const list: Transaction[] = [{
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
    const expectedList: Transaction[] = [
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
      },
      {
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
      }]

    const newList = sortA_Z(list, 'beneficiaryName')

    expect(newList).toEqual(expectedList)
  })

  it('should return a sorted list Z-A', () => {
    const list: Transaction[] = [{
      id: "FT2366",
      amount: 2629107,
      uniqueCode: 726,
      status: "SUCCESS",
      senderBank: "bni",
      accountNumber: "8379706095",
      beneficiaryName: "Andy",
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
    const expectedList: Transaction[] = [
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
      },
      {
        id: "FT2366",
        amount: 2629107,
        uniqueCode: 726,
        status: "SUCCESS",
        senderBank: "bni",
        accountNumber: "8379706095",
        beneficiaryName: "Andy",
        beneficiaryBank: "bca",
        remark: "sample remark",
        createdAt: "2021-09-02 20:49:49",
        completedAt: "2021-09-02 20:49:49",
      }]

    const newList = sortZ_A(list, 'beneficiaryName')

    expect(newList).toEqual(expectedList)
  })

  it('should return a sorted list based on date from newest', () => {
    const list: Transaction[] = [{
      id: "FT2366",
      amount: 2629107,
      uniqueCode: 726,
      status: "SUCCESS",
      senderBank: "bni",
      accountNumber: "8379706095",
      beneficiaryName: "Sammy-Jo Mccall",
      beneficiaryBank: "bca",
      remark: "sample remark",
      createdAt: "2021-08-21 20:49:49",
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
    const expectedList: Transaction[] = [
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
      },
      {
        id: "FT2366",
        amount: 2629107,
        uniqueCode: 726,
        status: "SUCCESS",
        senderBank: "bni",
        accountNumber: "8379706095",
        beneficiaryName: "Sammy-Jo Mccall",
        beneficiaryBank: "bca",
        remark: "sample remark",
        createdAt: "2021-08-21 20:49:49",
        completedAt: "2021-09-02 20:49:49",
      }]

    const newList = sortDateNewest(list)

    expect(newList).toEqual(expectedList)
  })

  it('should return a sorted list based on date from newest', () => {
    const list: Transaction[] = [{
      id: "FT2366",
      amount: 2629107,
      uniqueCode: 726,
      status: "SUCCESS",
      senderBank: "bni",
      accountNumber: "8379706095",
      beneficiaryName: "Sammy-Jo Mccall",
      beneficiaryBank: "bca",
      remark: "sample remark",
      createdAt: "2021-08-29 20:49:49",
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
      createdAt: "2021-08-21 11:49:49",
      completedAt: "2021-09-02 20:49:49",
    }]
    const expectedList: Transaction[] = [
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
        createdAt: "2021-08-21 11:49:49",
        completedAt: "2021-09-02 20:49:49",
      },
      {
        id: "FT2366",
        amount: 2629107,
        uniqueCode: 726,
        status: "SUCCESS",
        senderBank: "bni",
        accountNumber: "8379706095",
        beneficiaryName: "Sammy-Jo Mccall",
        beneficiaryBank: "bca",
        remark: "sample remark",
        createdAt: "2021-08-29 20:49:49",
        completedAt: "2021-09-02 20:49:49",
      }]

    const newList = sortDateOldest(list)

    expect(newList).toEqual(expectedList)
  })
})