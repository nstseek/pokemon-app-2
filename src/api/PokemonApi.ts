import { CompletePokemon, SimplePokemon } from "./PokemonApi.types";

export type ApiPaginatedResponse<T> = {
    count: number;
    next: string;
    previous: string | null;
    results: T[];
};

async function getPokemons({
    queryKey,
    signal,
}: {
    queryKey: [string, string];
    signal: AbortSignal | undefined;
}): Promise<CompletePokemon>;
async function getPokemons({
    queryKey,
    signal,
}: {
    queryKey: readonly unknown[] | string[];
    signal: AbortSignal | undefined;
}): Promise<ApiPaginatedResponse<SimplePokemon> | CompletePokemon>;
async function getPokemons({
    queryKey,
    signal,
}: {
    queryKey: readonly unknown[] | string[] | [string, string];
    signal: AbortSignal | undefined;
}): Promise<ApiPaginatedResponse<SimplePokemon> | CompletePokemon> {
    const [, filter, actualPage, pageSize] = queryKey as [
        string,
        string,
        number | undefined,
        number | undefined,
    ];

    const urlObject = new URL(`https://pokeapi.co/api/v2/pokemon/${filter}`);

    if (pageSize !== undefined && actualPage !== undefined) {
        const limit = pageSize;
        const offset = pageSize * actualPage;

        urlObject.searchParams.append('limit', limit.toString());
        urlObject.searchParams.append('offset', offset.toString());
    }

    const response = await fetch(urlObject.toString(), { signal });

    return response.json();
}

export const PokemonApi = {
    getPokemons,
};
