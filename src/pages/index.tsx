import { memo, useState } from "react";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useFetch } from "src/hooks/useFetch";
import { pageAnimeAtom } from "src/store";
import { typeAtom } from "src/store";
import type { NextPage } from "next";
import ErrorPage from "../components/error";
import Layout from "../components/layout";
import Loading from "../components/loading";
import SearchBar from "src/components/searchBar";
import PreviousButton from "src/components/previousButton";
import NextButton from "src/components/nextButton";
import ListAnimeCard from "src/components/listCard/anime";
import NotFoundInput from "src/components/notFoundInput";
import ListMangaCard from "src/components/listCard/manga";

type Value = { title: string; name: string };

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useAtom(pageAnimeAtom);
  const [type, setType] = useAtom(typeAtom);

  const { data, isLoading, isError } = useFetch(`/top/${type}?page=${page}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const anime = () => {
    setType("anime");
  };

  const manga = () => {
    setType("manga");
  };

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
      <Flex justify="center" alignItems="center" gap="4" pt="4">
        <Button onClick={anime}>Anime</Button>
        <Button onClick={manga}>Manga</Button>
      </Flex>
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
          {type === "anime" ? (
            <ListAnimeCard search={search} filteredData={filteredData} />
          ) : (
            <ListMangaCard search={search} filteredData={filteredData} />
          )}
        </Grid>
      ) : (
        <NotFoundInput type={type === "anime" ? "Anime" : "Manga"} />
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

export default memo(Home);
