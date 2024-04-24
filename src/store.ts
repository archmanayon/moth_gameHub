import { create } from "zustand";

type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

type GameQueryS = {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  findSearchText?: (searchText: string) => void;
};

const useGameQuerySort = create<GameQueryS>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({
      ...store.gameQuery,
      gameQuery: { genreId: genreId },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      ...store.gameQuery,
      gameQuery: { platformId: platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      ...store.gameQuery,
      gameQuery: { sortOrder: sortOrder },
    })),
  findSearchText: (text) => set({ gameQuery: { searchText: text } }),
}));

export default useGameQuerySort;
