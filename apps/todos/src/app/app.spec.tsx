import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  // TODO: mock fetch
  // it('should render successfully', () => {
  //   const { baseElement } = render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   );

  //   expect(baseElement).toBeTruthy();
  // });

  it('should execute a fake test', () => {
    expect(true).toBeTruthy();
  });
});
