import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Testa o componente <About.js />', () => {
  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading',
      { name: 'About Pokédex', level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve renderizar as especificações do documento)', () => {
    renderWithRouter(<About />);
    const SentOne = 'This application simulates a Pokédex, ';
    const SentTwo = 'a digital encyclopedia containing all Pokémons';
    const parag1 = screen.getByText(SentOne + SentTwo);
    const parag2 = screen.getByText(
      'One can filter Pokémons by type, and see more details for each one of them',
    );
    const pokeAgenda = screen.getByRole('img', { name: 'Pokédex' });

    expect(parag1).toBeInTheDocument();
    expect(parag2).toBeInTheDocument();
    expect(pokeAgenda).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
