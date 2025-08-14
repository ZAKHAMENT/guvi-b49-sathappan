
import sayHello from '../src/index.js';

test('should say hello to the given name', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});
