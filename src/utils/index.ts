import generations from '../data/generations';

export const getImageURL = (pokemonId: number) => {
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

    return `${baseURL}/official-artwork/${pokemonId}.png`;
};

export const getGenerationByPokemonId = (id: number) => {
    return generations.find(({ offset, limit }) => {
        const firstId = offset + 1;
        const lastId = firstId + limit;

        return id >= firstId && id <= lastId;
    });
};
