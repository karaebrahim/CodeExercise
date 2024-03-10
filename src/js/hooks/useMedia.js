import { useQuery } from '@tanstack/react-query';

const useMedia = (year) => {
	const fetchMedia = () =>
		fetch('http://localhost:3001/api/media', {
			params: {
				year
			}
		})
			.then((res) =>
				res.json(),
			)
			.catch(err => console.log(err));

	return useQuery({
    queryKey: year ? ['media', year] : ['media'],
    queryFn: () => fetchMedia()
  });
}

export default useMedia;
