import { NextRouter, useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import ErrorPage from "src/components/error";
import Layout from "src/components/layout";
import Loading from "src/components/loading";
import DetailCharacterSection from "src/components/detail/characterSection";

const DetailCharacter = () => {
  const router: NextRouter = useRouter();
  const id: string | string[] | undefined = router.query.id;

  const { data, isLoading, isError } = useFetch(`/characters/${id}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <Layout title={data.name}>
      <DetailCharacterSection data={data} />
    </Layout>
  );
};

export default DetailCharacter;
