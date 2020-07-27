const index = require('./index')

test('Should return the string provided', () => {
  expect(index.withDefault('UNITTESTVALUE', 'HELLO')).toBe('HELLO')
})
test('Should return the string provided', () => {
  process.env.UNITTESTVALUE = 'BOB'
  expect(index.withDefault('UNITTESTVALUE', 'HELLO')).toBe('BOB')
})

test('Should return the string provided', () => {
  process.env.UNITTESTVALUE = 'HELLO'
  expect(index.required('UNITTESTVALUE')).toBe('HELLO')
})

test('Should return bool true from string provided', () => {
  process.env.UNITTESTVALUE = 'true'
  expect(index.required('UNITTESTVALUE')).toBe(true)
})

test('Should return bool true from a provided `TRUE` string', () => {
  process.env.UNITTESTVALUE = 'TRUE'
  expect(index.required('UNITTESTVALUE')).toBe(true)
})

test('Should return bool false from string provided', () => {
  process.env.UNITTESTVALUE = 'false'
  expect(index.required('UNITTESTVALUE')).toBe(false)
})

test('Should return bool false from a provided `FALSE` string', () => {
  process.env.UNITTESTVALUE = 'FALSE'
  expect(index.required('UNITTESTVALUE')).toBe(false)
})

test('Should return number from string provided', () => {
  process.env.UNITTESTVALUE = '10.5'
  expect(index.required('UNITTESTVALUE')).toBe(10.5)
})

test('Should return number from string provided', () => {
  process.env.UNITTESTVALUE = '105'
  expect(index.required('UNITTESTVALUE')).toBe(105)
})

test('Should return undefined from string provided', () => {
  process.env.UNITTESTVALUE = 'undefined'
  expect(index.required('UNITTESTVALUE')).toBe(undefined)
})

test('Should return null from string provided', () => {
  process.env.UNITTESTVALUE = 'null'
  expect(index.required('UNITTESTVALUE')).toBe(null)
})

test('Should return object from json string provided', () => {
  process.env.UNITTESTVALUE = '{"name":"bob"}'
  expect(index.required('UNITTESTVALUE')).toEqual({
    name: 'bob'
  })
})

test('Should return string from string provided', () => {
  process.env.UNITTESTVALUE = 'production'
  expect(index.required('UNITTESTVALUE')).toBe('production')
})

test('Should return string false from string provided', () => {
  process.env.UNITTESTVALUE = "'false'"
  expect(index.required('UNITTESTVALUE')).toBe('false')
})

test('Should return string false from string provided', () => {
  process.env.UNITTESTVALUE = "'false'"
  expect(index.required('UNITTESTVALUE')).toBe('false')
})

test('Should return string true from string provided', () => {
  process.env.UNITTESTVALUE = "'true'"
  expect(index.required('UNITTESTVALUE')).toBe('true')
})

test('should return `false` when specified env is set to false against the specified default value', () => {
  process.env.UNITTESTVALUE = 'false',
  expect(index.withDefault('UNITTESTVALUE', true)).toEqual(false);
})