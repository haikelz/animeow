import { NextRouter, useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import Layout from "src/components/layout";
import Loading from "src/components/loading";
import ErrorPage from "src/components/error";
import DetailMangaSection from "src/components/detail/mangaSection";

const DetailManga = () => {
  const router: NextRouter = useRouter();
  const id: string | string[] | undefined = router.query.id;

  const { data, isLoading, isError } = useFetch(`/manga/${id}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <Layout title={data.title}>
      <DetailMangaSection data={data} />
    </Layout>
  );
};

export default DetailManga;
