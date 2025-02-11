import React from 'react';
import Link from 'next/link';

interface GetPokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

const fetchPokemon = async (): Promise<GetPokemonResponse> => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    return data;
};

const getPokemonId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

export default async function PokemonPage() {
    const pokemonList = await fetchPokemon();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pokémon List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pokemonList.results.map((pokemon: { name: string, url: string }) => (
                    <Link key={pokemon.url} href={`/pokemon/${getPokemonId(pokemon.url)}`}>
                        <li className="bg-white shadow-md rounded-lg p-4">
                            {pokemon.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
