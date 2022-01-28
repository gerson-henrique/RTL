import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se as informações detalhadas aparecem', () => {
  it('Testa 404', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const resum = 'This intelligent Pokémon roasts hard berries';
    const pkmnName = screen.getByText('Pikachu Details');
    const summary = screen.getByRole('heading', { name: 'Summary', level: 2 });
    const sumPokm = screen.getByText(
      `${resum} with electricity to make them tender enough to eat.`,
    );
    expect(pkmnName).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(sumPokm).toBeInTheDocument();
  });
});

describe('Teste se existe na página uma seção com os mapas', () => {
  it('Na seção de detalhes deverá existir um heading h2', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const gameLoc = screen.getByRole('heading', {
      name: 'Game Locations of Pikachu', level: 2 });
    const pikaLoc = screen.getAllByRole('img', {
      name: 'Pikachu location' });
    const PikaLocNameI = screen.getByText('Kanto Viridian Forest');
    const PikaLocNameII = screen.getByText('Kanto Power Plant');
    expect(gameLoc).toBeInTheDocument();
    expect(pikaLoc).toHaveLength(2);
    expect(pikaLoc[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(pikaLoc[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(PikaLocNameI).toBeInTheDocument();
    expect(PikaLocNameII).toBeInTheDocument();
  });
});
