export const capitalize = (str: string) => {
  if (
    !str ||
    typeof str !== 'string' ||
    str.length === 0 ||
    str.trim() === ''
  ) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
