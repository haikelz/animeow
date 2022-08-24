/*
Ga tau kenapa kalo pake getStaticPaths ama StaticProps, dia muncul notif undefined :(

type DetailPaths = {
  mal_id: string;
};

export const getStaticPaths = async () => {
  try {
    const response: Response = await fetch("https://api.jikan.moe/v4/anime");
    const data = await response.json();

    const paths = data.data.map((anime: DetailPaths) => {
      return {
        params: {
          id: anime.mal_id.toString(),
        },
      };
    });

    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async (context: Context) => {
  try {
    const id: string = context.params.id;
    const response: Response = await fetch(
      `https://api.jikan.moe/v4/anime/${id}`
    );
    const data = await response.json();

    return {
      props: {
        detailAnime: data.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
*/
export {};
