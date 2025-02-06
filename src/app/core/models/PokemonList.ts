export interface PokemonList {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonUrl[]
}

export interface PokemonUrl {
    name: string;
    url: string
}