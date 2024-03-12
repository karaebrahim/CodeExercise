import React, { useState } from 'react';
import styled from 'styled-components';
import useMedia from '../hooks/useMedia';
import Loader from './Loader';
import Filters from './Filters';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  margin: 1rem;
  text-align: center;
`;

const Media = () => {
  const [year, setYear] = useState();
  const [genre, setGenre] = useState();
  const [type, setType] = useState();

  const pageSize = 9;
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useMedia({ year, genre, type, page, pageSize });

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = data?.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      })
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  }

  const clearFilters = () => {
    setYear('');
    setGenre('');
    setType('');
  }

  if (isLoading) return <Loader />;
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <>
      <Filters
        year={year}
        genre={genre}
        type={type}
        setYear={setYear}
        setGenre={setGenre}
        setType={setType}
        clearFilters={clearFilters}
        searchItems={searchItems}
      />
      <Wrapper>
        {searchInput.length > 1 ? (
          filteredResults.map((medium, i) => {
            return (
              <Card key={i} data={medium} />
            )
          })
        ) : (
          data?.map((medium, i) => (
            <Card key={i} data={medium} />
          ))
        )}
      </Wrapper>
      <ButtonContainer>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </ButtonContainer>
    </>
  )
};

export default Media;
