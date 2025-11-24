import { useEffect, useState } from "react";

export function useLatestNews(limit = 12) {
    const [latestNews, setLatestNews] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLatest() {
            setLoading(true);

            try {
                const res = await fetch(
                    `http://localhost:5000/news?_sort=date&_order=desc&_page=${page}&_limit=${limit}`
                );

                const data = await res.json();

                if (data.length < limit) setHasMore(false);

                //cegah duplikasi jika Load More
                setLatestNews(prev => {
                    const merged = [...prev, ...data];
                    return merged.filter(
                        (item, index, self) =>
                            index === self.findIndex(n => n.id === item.id)
                    );
                });
            } catch (err) {
                console.error("Failed to fetch latest news:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchLatest();
    }, [page, limit]);

    return { latestNews, loading, hasMore, loadMore: () => setPage(p => p + 1) };
}