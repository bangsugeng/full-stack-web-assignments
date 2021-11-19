import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ];

  const newTodo = {
    id: 4,
    name: 'Promote it',
    isComplete: false,
  }

  const expected = [newTodo, ...defaultTodo]

  // Act
  const result = AddTodo(defaultTodo, newTodo)

  // Assert
  result.map((result, index) => {
    expect(result).toBe(expected[index])
  })
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const existingTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ];

  const newTodo = {
    id: 4,
    name: 'Promote it',
    isComplete: false,
  }

  const notExpected = existingTodo
  
  // Act
  const result = AddTodo(existingTodo, newTodo)
  
  // Assert
  expect(result).not.toBe(notExpected)

})