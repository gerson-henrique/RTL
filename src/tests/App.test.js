import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do Componente App.js', () => {
  it('testa se a ordem dos links é Home, About, Favorite Pokemons', () => {
    renderWithRouter(<App />);
    const arrayLenght = 3;
    const linksFather = screen.getByRole('navigation');
    const linksArray = linksFather.childNodes;
    expect(linksArray).toHaveLength(arrayLenght);
    expect(linksArray[0]).toHaveTextContent(/Home/i);
    expect(linksArray[1]).toHaveTextContent(/About/i);
    expect(linksArray[2]).toHaveTextContent(/Favorite Pokémons/i);
  });

  it('Testa se ao clicar em Home vamos para o endereço /', () => {
    const { history } = renderWithRouter(<App />);
    const linksFather = screen.getByRole('navigation');
    const linksArray = linksFather.childNodes;
    userEvent.click(linksArray[0]);
    expect(history.location.pathname).toBe('/');
  });

  it('Testa se ao clicar em About vamos para o endereço /about', () => {
    const { history } = renderWithRouter(<App />);
    const linksFather = screen.getByRole('navigation');
    const linksArray = linksFather.childNodes;
    userEvent.click(linksArray[1]);
    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se ao clicar em Pokémons Favorites vamos para o endereço /favorites', () => {
    const { history } = renderWithRouter(<App />);
    const linksFather = screen.getByRole('navigation');
    const linksArray = linksFather.childNodes;
    userEvent.click(linksArray[2]);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testa 404', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/coments');
    const linksFather = screen.getByRole('img',
      { name: /Pikachu crying because the page requested was not found/i });
    expect(linksFather).toBeInTheDocument();
  });
});
