export default function NewsCard({
    title,
    summary,
    image,
    rating,
    tag,
    date,
}) {
    const formattedDate = new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <article className="group bg-slate-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition cursor-pointer flex flex-col">

            {/* IMAGE + TAG */}
            <div className="relative w-full h-36 md:h-40 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                />

                <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                    {tag}
                </span>
            </div>

            {/* CONTENT */}
            <div className="p-3 flex flex-col h-full gap-1.5">

                {/* TITLE */}
                <h3 className="text-base font-semibold leading-snug text-slate-100 group-hover:text-indigo-400 transition line-clamp-2">
                    {title}
                </h3>

                {/* DATE */}
                <span className="text-[11px] text-slate-400">
                    {formattedDate}
                </span>

                {/* SUMMARY */}
                <p className="text-sm text-slate-300 line-clamp-2">
                    {summary}
                </p>

                {/* RATING — pinned at bottom */}
                <div className="flex items-center gap-1 text-sm font-medium mt-auto pt-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-slate-200">{rating}</span>
                </div>
            </div>
        </article>
    );
}
