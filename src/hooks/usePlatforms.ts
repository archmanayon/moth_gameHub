import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    // staleTime: 1000 * 60 * 60 * 24 * 30,
    // refetchInterval: 1000 * 60 * 60 * 24 * 30,
    // refetchOnWindowFocus: false,
    // enabled: true,
    // initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
