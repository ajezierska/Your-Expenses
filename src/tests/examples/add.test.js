const add = (a, b) => a + b;
const generateGreeting = (name = 'noname') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
})

test('should take greeting with name', () => {
  const result = generateGreeting('Angie');
  expect(result).toBe('Hello Angie!')
});

test('should take greeting with no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello noname!')
});

