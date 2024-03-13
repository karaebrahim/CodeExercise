import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import Loader from "./Loader";
import Filters from "./Filters";
import Card from "./Card";

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

const Para = styled.p`
  margin: 2rem auto;
  text-align: center;
`;

const Media = () => {
  const [year, setYear] = useState<string | undefined>();
  const [genre, setGenre] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();

  const pageSize = 9;
  const [page, setPage] = useState(1);

  const { isLoading, error, data, totalPages } = useMedia({
    year,
    genre,
    type,
    page,
    pageSize,
  });

  const [filteredResults, setFilteredResults] = useState<{}[] | undefined>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setPage(1);
  }, [year, genre, type]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data?.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const clearFilters = () => {
    setYear("");
    setGenre("");
    setType("");
  };

  if (isLoading) return <Loader />;
  if (error) return `An error has occurred: ${error.message}`;
  const isIdle = data?.length === 0;

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
        {searchInput.length > 1
          ? filteredResults?.map((medium, i) => {
              return <Card key={i} data={medium} />;
            })
          : data?.map((medium, i) => <Card key={i} data={medium} />)}
      </Wrapper>
      {isIdle ? (
        <Para>No data matches those filters. Please try again.</Para>
      ) : (
        <ButtonContainer>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </ButtonContainer>
      )}
    </>
  );
};

export default Media;
