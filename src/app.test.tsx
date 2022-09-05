import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';


test('test #1', () => {
    const value = 2 + 2;
    expect(value).toEqual(4);    
});


test('render test', async () => {
    render(<App />);
    expect(screen.getByText('Something in H1')).toBeDefined();
});