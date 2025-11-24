import NewsCard from "../components/NewsCard";
import { useTopNews } from "../hooks/useTopNews";
import { useLatestNews } from "../hooks/useLatestNews";
import AdCarousel from "../components/AdCarousel";
import { useBanners } from "../hooks/useBanners";

export default function Home() {
    const { banners, loading: loadingBanners } = useBanners();
    const { topNews, loading: loadingTop } = useTopNews();
    const { latestNews, loading, hasMore, loadMore } = useLatestNews();

    return (
        <>
            {/* Banner Carousel */}
            {!loadingBanners && banners.length > 0 && (
                <div className="mb-10">
                    <AdCarousel banners={banners} interval={5000} />
                </div>
            )}

            {/* TOP NEWS */}
            <section>
                <h2 className="text-2xl font-bold mb-6 text-slate-100">
                    Top News
                </h2>

                {loadingTop && <p className="text-slate-400">Loading...</p>}

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-6
                ">
                    {topNews.map((n) => (
                        <NewsCard key={`top-${n.id}`} {...n} />
                    ))}
                </div>
            </section>

            {/* LATEST NEWS */}
            <section>
                <h2 className="text-2xl font-bold mb-6 text-slate-100">
                    Latest News
                </h2>

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-6
                ">
                    {latestNews.map((n) => (
                        <NewsCard key={`latest-${n.id}`} {...n} />
                    ))}
                </div>

                {hasMore && !loading && (
                    <button
                        onClick={loadMore}
                        className="mt-8 mx-auto block bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-indigo-600 hover:shadow-lg shadow-slate-900 cursor-pointer transition"
                    >
                        Load more
                    </button>
                )}

                {loading && <p className="mt-4 text-center text-slate-400">Loading...</p>}
            </section>
        </>
    );
}
