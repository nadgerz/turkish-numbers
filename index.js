const dictionary = {
  0: 'sıfır',
  1: 'bir',
  2: 'iki',
  3: 'üç',
  4: 'dört',
  5: 'beş',
  6: 'altı',
  7: 'yedi',
  8: 'sekiz',
  9: 'dokuz',
  10: 'on',
  20: 'yirmi',
  30: 'otuz',
  40: 'kırk',
  50: 'elli',
  60: 'altmış',
  70: 'yetmiş',
  80: 'seksen',
  90: 'doksan',
}

function convertDigits(num) {
  const digits = num.toString().replace('-', '').split('')

  let words = digits
    .map(
      (digit, index) =>
        dictionary[digit * Math.pow(10, digits.length - 1 - index)],
    )
    .join(' ')

  return num < 0 ? `eksi ${words}` : words
}

function getTurkishNumber(num) {
  if (num <= MIN || num >= MAX)
    throw new Error(`Please give a number between ${MIN} and ${MAX}.`)

  if (num in dictionary) return dictionary[num]

  return convertDigits(num)
}

//const MIN = -100
//const MAX = 1000

const MIN = 0
const MAX = 100

module.exports = {
  MIN,
  MAX,
  getTurkishNumber,
}
