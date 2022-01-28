import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const calltoAction = 'More details';

describe('Testes do Componente Pokemon.js', () => {
  it('Testa se o texto condiz com os requerimentos', () => {
    renderWithRouter(<App />);
    const PKMNname = screen.getByText('Pikachu');
    const PKMNType = screen.getByTestId('pokemon-type');
    const PKMNWeight = screen.getByText('Average weight: 6.0 kg');
    const PKMNImg = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(PKMNType).toHaveTextContent('Electric');
    expect(PKMNname).toBeInTheDocument();
    expect(PKMNWeight).toBeInTheDocument();
    expect(PKMNImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Testa o Link do card', () => {
    renderWithRouter(<App />);
    const detailBtn = screen.getByText(calltoAction);
    expect(detailBtn).toHaveAttribute('href', '/pokemons/25');
  });

  it('Testa se ao clicar em detalhes a chadamada é feita', () => {
    const { history } = renderWithRouter(<App />);
    const detailBtn = screen.getByText(calltoAction);
    userEvent.click(detailBtn);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Testa a estrela de favorito', () => {
    renderWithRouter(<App />);
    const detailBtn = screen.getByText(calltoAction);
    userEvent.click(detailBtn);
    const fav = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(fav);
    const home = screen.getByText('Home');
    userEvent.click(home);
    const star = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
