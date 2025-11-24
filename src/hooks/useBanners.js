import { useEffect, useState } from "react";

export function useBanners() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBanners() {
            try {
                const res = await fetch("http://localhost:5000/banners");
                const data = await res.json();
                setBanners(data);
            } catch (err) {
                console.error("Failed to fetch banners:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchBanners();
    }, []);

    return { banners, loading };
}
