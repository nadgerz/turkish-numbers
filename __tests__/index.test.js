const { MIN, MAX, getTurkishNumber } = require('../')

const zero = ['sıfır']

const singles = [
  'bir',
  'iki',
  'üç',
  'dört',
  'beş',
  'altı',
  'yedi',
  'sekiz',
  'dokuz',
]

const tens = [
  'on',
  'yirmi',
  'otuz',
  'kırk',
  'elli',
  'altmış',
  'yetmiş',
  'seksen',
  'doksan',
]

const generatedStrings = tens.map((ten) => {
  const arr = [ten]
  singles.map((single) => arr.push(`${ten} ${single}`))

  return arr
})

const results = [...zero, ...singles, ...generatedStrings].flat()
// console.log(results)

for (let i = MIN; i <= MAX; i++) {
  it(`${i} should return '${results[i]}'`, () => {
    const result = getTurkishNumber(i)
    expect(result).toBe(results[i])
  })
}

const errThrowMsg = `Please give a number between ${MIN} and ${MAX}.`

it('-3 should throw an error', () => {
  const result = () => getTurkishNumber(-3)
  expect(result).toThrow(errThrowMsg)
})

it('100 should throw an error', () => {
  const result = () => getTurkishNumber(100)
  expect(result).toThrow(errThrowMsg)
})
