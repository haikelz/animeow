import { NextRouter, useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import { memo } from "react";
import Layout from "src/components/layout";
import Loading from "src/components/loading";
import ErrorPage from "src/components/error";
import DetailAnimeSection from "src/components/detail/animeSection";

const DetailAnime = () => {
  const router: NextRouter = useRouter();
  const id: string | string[] | undefined = router.query.id;

  const { data, isLoading, isError } = useFetch(`/anime/${id?.toString()}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <Layout title={data.title}>
      <DetailAnimeSection data={data} />
    </Layout>
  );
};

export default memo(DetailAnime);
