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

export const cn = (...classes: (string | undefined | boolean)[]) => {
  if (classes.length === 0 || classes.every((cls) => cls === undefined)) {
    return ''
  }
  return classes.filter(Boolean).join(' ')
}
