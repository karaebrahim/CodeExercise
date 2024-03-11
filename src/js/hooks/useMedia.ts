import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface MediaType {
	title: string;
	year: string;
	poster: string;
	type: string;
	genre: Array<string>;
}

interface MediaQuery {
	page: number;
	pageSize: number;
	year: string;
}

const useMedia = (query: MediaQuery) => useQuery<MediaType[], Error>({
	queryKey: query ? ['media', query] : ['media'],
	queryFn: () => axios
		.get('http://localhost:3001/api/media', {
			params: {
				query,
				_start: (query.page - 1) * query.pageSize,
				_limit: query.pageSize
			}
		})
		.then((res) => res.data),
});

export default useMedia;
