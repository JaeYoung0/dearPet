export function sleep(time: number, value: any) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(value)
    }, time)
  )
}
