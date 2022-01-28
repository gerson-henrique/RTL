import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testes do Componente NotFound.js', () => {
  it('Texta se o texto condiz com os requerimentos', () => {
    renderWithRouter(<NotFound />);
    const Header = screen.getByRole('heading',
      { level: 2, name: 'Page requested not found Crying emoji',
      });
    expect(Header).toBeInTheDocument();
  });

  it('Texta se o texto condiz com os requerimentos', () => {
    renderWithRouter(<NotFound />);
    const sadPika = screen.getByRole('img',
      { name: 'Pikachu crying because the page requested was not found' });
    expect(sadPika).toHaveAttribute('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
