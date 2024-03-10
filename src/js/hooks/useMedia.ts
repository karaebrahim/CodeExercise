import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface PostQuery {
	page: number;
	pageSize: number;
}

const useMedia = (query: PostQuery) => {
	const fetchMedia = () => axios
		.get('http://localhost:3001/api/media', {
			params: {
				_start: (query.page - 1) * query.pageSize,
				_limit: query.pageSize
			}
		})
		.then((res) => res.data)
		.catch(err => console.log(err));

	return useQuery({
    queryKey: ['media', query],
    queryFn: () => fetchMedia(),
		// keepPreviousData: true
  });
}

export default useMedia;
