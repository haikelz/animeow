import { useFetch } from "@/hooks/useFetch";
import DetailAnime from "@/sections/DetailAnime";
import Layout from "@/ui/layout";
import ErrorPage from "@/ui/suspense/Error";
import Loading from "@/ui/suspense/Loading";
import { NextRouter, useRouter } from "next/router";
import { memo } from "react";

const DetailAnimePage = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/anime/${id?.toString()}`);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <Layout title={data.title}>
      <DetailAnime data={data} />
    </Layout>
  );
};

export default memo(DetailAnimePage);
