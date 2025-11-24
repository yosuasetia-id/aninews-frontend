import { useEffect, useState } from "react";

export function useTopNews(limit = 12) {
    const [topNews, setTopNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTop() {
            try {
                const res = await fetch(
                    `http://localhost:5000/news?_sort=rating&_order=desc&_limit=${limit}`
                );

                const data = await res.json();
                setTopNews(data);
            } catch (err) {
                console.error("Failed to fetch top news:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchTop();
    }, [limit]);

    return { topNews, loading };
}