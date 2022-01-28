import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const PKMNBtn = 'Próximo pokémon';

describe('Testes do Componente Pokedex.js', () => {
  it('Testa renderização do h2', () => {
    renderWithRouter(<App />);
    const Header = screen.getByRole('heading',
      { level: 2, name: 'Encountered pokémons',
      });
    expect(Header).toBeInTheDocument();
  });

  it('Teste se o botão tem a frase especificada', () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByText(PKMNBtn);
    expect(btnNext).toBeInTheDocument();
  });

  it('Teste o proximo PKMN é renderizado', () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByText(PKMNBtn);
    userEvent.click(btnNext);
    const nextName = screen.getByText('Charmander');
    expect(nextName).toBeInTheDocument();
  });

  it('Teste o ultimo PKMN linka para o primeiro', () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByText(PKMNBtn);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    userEvent.click(btnNext);
    const nextName = screen.getByText('Pikachu');
    expect(nextName).toBeInTheDocument();
  });

  it('Testa se só um pokemon é mostrado por vez', () => {
    renderWithRouter(<App />);
    const pokemonPhoto = screen.getAllByRole('img');
    expect(pokemonPhoto).toHaveLength(1);
  });

  it('deve existir um botão para cada tipo', () => {
    renderWithRouter(<App />);
    const pokemonTypes = screen.getAllByTestId('pokemon-type-button');
    expect(pokemonTypes[0]).toHaveTextContent('Electric');
    expect(pokemonTypes[1]).toHaveTextContent('Fire');
    expect(pokemonTypes[2]).toHaveTextContent('Bug');
    expect(pokemonTypes[3]).toHaveTextContent('Poison');
    expect(pokemonTypes[4]).toHaveTextContent('Psychic');
    expect(pokemonTypes[5]).toHaveTextContent('Normal');
    expect(pokemonTypes[6]).toHaveTextContent('Dragon');
    expect(pokemonTypes[0]).toBeInTheDocument();
    userEvent.click(pokemonTypes[5]);
    const normalPKM = screen.getByText('Snorlax');
    expect(normalPKM).toBeInTheDocument();
  });

  it('Operação não deve ser interrompida', () => {
    renderWithRouter(<App />);
    const pokemonTypes = screen.getAllByRole('button');
    expect(pokemonTypes[0]).toBeInTheDocument();
    userEvent.click(pokemonTypes[0]);
    const pkmn = screen.getByText('Pikachu');
    expect(pkmn).toBeInTheDocument();
  });
});
