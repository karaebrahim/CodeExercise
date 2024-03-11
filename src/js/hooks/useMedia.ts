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
}

const useMedia = (query: MediaQuery) => useQuery<MediaType[], Error>({
	queryKey: ['media', query],
	queryFn: () => axios
		.get('http://localhost:3001/api/media', {
			params: {
				_start: (query.page - 1) * query.pageSize,
				_limit: query.pageSize
			}
		})
		.then((res) => res.data),
});

export default useMedia;
