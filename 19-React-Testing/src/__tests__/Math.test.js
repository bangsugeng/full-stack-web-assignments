import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const num1 = 25
  const num2 = 75
  const expected = 100

  // Act
  const result = Add(num1, num2)
  
  // Assert
  expect(result).toBe(expected)

})

test('Return substraction of a - b', () => {
  // Arrange
  const num1 = 24
  const num2 = 12
  const expected = 12

  // Act
  const result = Substract(num1, num2)

  // Assert
  expect(result).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const num1 = 7
  const num2 = 12
  const expected = 84

  // Act
  const result = Multiplication(num1, num2)

  // Assert
  expect(result).toBe(expected)

})