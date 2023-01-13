export const capitalizeAWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const capitalizeString = (textStr) => {
  return textStr
    .split(' ')
    .map((word) => capitalizeAWord(word))
    .join(' ')
}
