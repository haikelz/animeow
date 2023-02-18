import { useFetch } from "~hooks/useFetch";
import DetailManga from "~sections/DetailManga";
import Layout from "~ui/layout";
import ErrorPage from "~ui/suspense/Error";
import Loading from "~ui/suspense/Loading";
import { NextRouter, useRouter } from "next/router";
import { memo } from "react";

const DetailMangaPage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useFetch(`/manga/${id}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <Layout title={data.title}>
      <DetailManga data={data} />
    </Layout>
  );
};

export default memo(DetailMangaPage);
