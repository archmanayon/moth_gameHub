import axios, { AxiosRequestConfig } from "axios";
import { Genre } from "../hooks/useGenres";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d5ce057af08c4f88bbf5e4bf4175b1a2",
    // key: "c7b18323a47d40c394ea5b019646b1f5",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T[]>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "d5ce057af08c4f88bbf5e4bf4175b1a2",
//     // key: "c7b18323a47d40c394ea5b019646b1f5",
//   },
// });
