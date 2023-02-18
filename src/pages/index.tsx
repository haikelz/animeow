import { Button, Flex, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useReducerAtom } from "jotai/utils";
import type { NextPage } from "next";
import { memo, useState } from "react";
import { useFetch } from "~hooks/useFetch";
import { pageAnimeAtom, typeAtom } from "~store";
import { NextButton, PreviousButton } from "~ui/buttons";
import AnimeCard from "~ui/cards/CardAnime";
import MangaCard from "~ui/cards/CardManga";
import { SearchBar } from "~ui/input/SearchBar";
import Layout from "~ui/layout";
import NotFoundInput from "~ui/messages/NotFoundInput";
import ErrorPage from "~ui/suspense/Error";
import Loading from "~ui/suspense/Loading";

type Value = {
  title: string;
  name: string;
};

type Action = {
  name: string;
};

const reducerType = (prev: string, action: Action) => {
  switch (action.name) {
    case "manga":
      return "manga";

    case "anime":
      return "anime";

    default:
      throw new Error("Unknown action type");
  }
};

const Home: NextPage = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useAtom(pageAnimeAtom);
  const [type, dispatch] = useReducerAtom(typeAtom, reducerType);
  const [name, setName] = useAtom(typeAtom);

  const choice = ["anime", "manga"];

  const handleClick = (name: string) => {
    dispatch({ name: name });
    setName(name);
  };

  const { data, isLoading, isError } = useFetch(`/top/${type}?page=${page}`);

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
      <Flex justify="center" alignItems="center" gap="4" pt="4">
        {choice.map((value, index) => (
          <Button
            key={index + 1}
            colorScheme={name === value ? "blue" : "gray"}
            onClick={() => handleClick(value)}
          >
            {value[0].toUpperCase() + value.substring(1)}
          </Button>
        ))}
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
            <AnimeCard search={search} filteredData={filteredData} />
          ) : (
            <MangaCard search={search} filteredData={filteredData} />
          )}
        </Grid>
      ) : (
        <NotFoundInput type={type === "anime" ? "Anime" : "Manga"} />
      )}
      <Flex justify={page > 1 ? "space-between" : "end"} alignItems="center" w="full">
        {page > 1 && <PreviousButton page={page} setPage={setPage} />}
        {page < 756 && <NextButton page={page} setPage={setPage} />}
      </Flex>
    </Layout>
  );
};

export default memo(Home);
