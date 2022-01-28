import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testes do Componente Favoritos', () => {
  it('testa se o paragrafo é exibido caso não haja favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const noMsg = screen.getByText('No favorite pokemon found');
    expect(noMsg).toBeInTheDocument();
  });

  it('testa se as cartas são renderizadas', () => {
    renderWithRouter(<App />);
    const moreDetail = screen.getByText('More details');
    userEvent.click(moreDetail);
    const favCheck = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favCheck);
    const favorite = screen.getByText('Favorite Pokémons');
    userEvent.click(favorite);
    const pika = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(pika).toBeInTheDocument();
  });
});
