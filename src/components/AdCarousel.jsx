import { useEffect, useState } from "react";

export default function AdCarousel({ banners = [], interval = 4000 }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, interval);

        return () => clearInterval(slider);
    }, [banners.length, interval]);

    if (!banners.length) return null;

    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {banners.map((banner, i) => (
                    <a
                        key={i}
                        href={banner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-w-full block"
                    >
                        <img
                            src={banner.image}
                            alt={`Advertisement ${i + 1}`}
                            className="w-full h-32 md:h-44 lg:h-52 object-cover"
                            loading="lazy"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
