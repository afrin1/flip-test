const MONTH: string[] = [
  "January", "February",
  "March", "April", "May",
  "June", "July", "August",
  "September", "October",
  "November", "December"
]
export const getDate_DD_MONTH_YYYY = (time: string) => {
  const date = new Date(time.split(' ')[0])
  const day = date.getDate()
  const month = MONTH[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}