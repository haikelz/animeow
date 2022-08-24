import { Flex, Grid, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useFetch } from "src/hooks/useFetch";
import { pageCharactersAtom, searchCharacterAtom } from "src/store";
import Layout from "src/components/layout";
import SearchBar from "src/components/searchBar";
import Loading from "src/components/loading";
import ErrorPage from "src/components/error";
import PreviousButton from "src/components/previousButton";
import NextButton from "src/components/nextButton";
import ListCharactersCard from "src/components/card/characters";
import NotFoundInput from "src/components/notFoundInput";

type Value = { name: string };

const Characters = () => {
  const [page, setPage] = useAtom(pageCharactersAtom);
  const [search, setSearch] = useAtom(searchCharacterAtom);

  const { data, isLoading, isError } = useFetch(`/top/characters?page=${page}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const filteredData = data.filter((value: Value) => {
    if (search === "") {
      return value;
    } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
      return value;
    }
  });

  return (
    <Layout title="Animeow">
      <SearchBar setSearch={setSearch} />
      {filteredData.length ? (
        <Grid
          py="6"
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          }}
          gap="6"
        >
          <ListCharactersCard filteredData={filteredData} />
        </Grid>
      ) : (
        <NotFoundInput type="Character" />
      )}
      <Flex
        justify={page > 1 ? "space-between" : "end"}
        alignItems="center"
        w="full"
      >
        {page > 1 && <PreviousButton page={page} setPage={setPage} />}
        {page < 1655 && <NextButton page={page} setPage={setPage} />}
      </Flex>
    </Layout>
  );
};

export default Characters;
