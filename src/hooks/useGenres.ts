import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre[]>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    // apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    // staleTime: 1000 * 60 * 60 * 24 * 30,
    // refetchInterval: 1000 * 60 * 60 * 24 * 30,
    // refetchOnWindowFocus: false,
    // enabled: true,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
