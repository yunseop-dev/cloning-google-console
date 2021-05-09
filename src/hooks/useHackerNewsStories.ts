import { useState, useEffect, useCallback } from "react";

const LIMIT = 15;
interface NewsItem {
    score: number;
    by: string;
    time: number;
    url: string;
    title: string;
}

export default function useHackerNewsStoires () {
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [items, setItems] = useState<NewsItem[]>([]);

    const fetchAPI = useCallback(async () => {
        try {
            setIsLoading(true);
            const bestStories: number[] = await fetch(
                "https://hacker-news.firebaseio.com/v0/beststories.json"
            ).then((res) => res.json());

            const result = await Promise.all(
                bestStories
                    .filter(
                        (_, index) => LIMIT * (page - 1) <= index && index < LIMIT * page
                    )
                    .map((story) =>
                        fetch(
                            `https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`
                        ).then((res) => res.json())
                    )
            );

            setItems((prev) => [...prev, ...result]);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    function fetchMore () {
        if (isLoading) return;
        setPage((page) => page + 1);
    }

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI]);

    return {
        error,
        isLoading,
        items,
        fetchMore,
    };
}