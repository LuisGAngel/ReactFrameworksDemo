import React from 'react';
import Image from 'next/image';

interface Pokemon {
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    sprites: {
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
    };
    weight: number;
};

const fetchPokemon = async (pokemonName: string): Promise<Pokemon> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    return data;
};

export default async function PokemonByNamePage ({ params, }: { params: Promise<{ pokemonName: string }> }) {
    const pokemonName = (await params).pokemonName;
    const pokemon = await fetchPokemon(pokemonName);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4 capitalize">{pokemon.name}</h1>
            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={200}
                height={200}
                className="mb-4"
            />
            <p className="text-xl">ID: {pokemon.id}</p>
            <p className="text-xl">Height: {pokemon.height}</p>
            <p className="text-xl">Weight: {pokemon.weight}</p>
        </div>
    );
};
