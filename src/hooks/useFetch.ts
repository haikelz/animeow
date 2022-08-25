import { useQuery } from "@tanstack/react-query";

const fetchData = async (link: string) => {
    const response: Response = await fetch(`https://api.jikan.moe/v4${link}`);
    const data = await response.json();

    return data.data;
}

export const useFetch = (link: string) => {
    return useQuery(["fetch data", link], () => fetchData(link), { keepPreviousData: true, refetchOnWindowFocus: false });
}