import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useGenres = () => useQuery({
	queryKey: ['genres'],
	queryFn: () => axios
		.get('http://localhost:3001/api/media/genres')
		.then((res) => res.data),
});

export default useGenres;
