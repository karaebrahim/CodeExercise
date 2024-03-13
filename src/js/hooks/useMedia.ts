import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface MediaType {
  page: {
    title: string;
    year: string;
    poster: string;
    type: string;
    genre: Array<string>;
  }[];
  totalPages: number;
}

interface MediaQuery {
  year?: string;
  genre?: string;
  type?: string;
  page: number;
  pageSize: number;
}

const useMedia = (query: MediaQuery) => {
  const queryResults = useQuery<MediaType, Error>({
    queryKey: query ? ["media", query] : ["media"],
    placeholderData: keepPreviousData,
    queryFn: () =>
      axios
        .get("http://localhost:3001/api/media", {
          params: {
            year: query.year,
            genre: query.genre,
            type: query.type,
            _page: query.page,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
  });

  return {
    isLoading: queryResults.isLoading,
    error: queryResults.error,
    data: queryResults.data?.page,
    totalPages: queryResults.data?.totalPages,
  };
};

export default useMedia;
