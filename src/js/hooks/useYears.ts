import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useYears = () => useQuery({
	queryKey: ['years'],
	queryFn: () => axios
		.get('http://localhost:3001/api/media/years')
		.then((res) => res.data),
});

export default useYears;
