import { Flex, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useFetch } from "src/hooks/useFetch";
import { pageAnimeAtom, searchAnimeAtom } from "src/store";
import type { NextPage } from "next";
import ErrorPage from "../components/error";
import Layout from "../components/layout";
import Loading from "../components/loading";
import SearchBar from "src/components/searchBar";
import PreviousButton from "src/components/previousButton";
import NextButton from "src/components/nextButton";
import ListAnimeCard from "src/components/card/anime";
import NotFoundInput from "src/components/notFoundInput";

type Value = { title: string };

const Home: NextPage = () => {
  const [page, setPage] = useAtom(pageAnimeAtom);
  const [search, setSearch] = useAtom(searchAnimeAtom);

  const { data, isLoading, isError } = useFetch(`/top/anime?page=${page}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const filteredData = data.filter((value: Value) => {
    if (search === "") {
      return value;
    } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
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
          <ListAnimeCard filteredData={filteredData} />
        </Grid>
      ) : (
        <NotFoundInput type="Anime" />
      )}
      <Flex
        justify={page > 1 ? "space-between" : "end"}
        alignItems="center"
        w="full"
      >
        {page > 1 && <PreviousButton page={page} setPage={setPage} />}
        {page < 756 && <NextButton page={page} setPage={setPage} />}
      </Flex>
    </Layout>
  );
};

export default Home;
