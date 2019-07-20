import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/app';

test('should whatever', () => {
  const { debug } = render(<App />);
  debug();
  expect(true).toBeTruthy();
});
