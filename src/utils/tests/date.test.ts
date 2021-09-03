import { getDate_DD_MONTH_YYYY } from "../date"

describe('Date utils', () => {
  it('should return the date in the dd Month yyyy format', () => {
    const result = getDate_DD_MONTH_YYYY('2021-08-29 20:49:49')
    expect(result).toEqual('29 August 2021')
  })
})