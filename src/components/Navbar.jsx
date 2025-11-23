import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const isLoggedIn = false;
    const userAvatar = "https://i.pravatar.cc/40";

    const menuItems = [
        { to: "/", label: "Home" },
        { to: "/animenews", label: "AnimeNews" },
        { to: "/manganews", label: "MangaNews" },
        { to: "/komunitas", label: "Komunitas" },
    ];

    const linkStyle = "text-heading hover:text-fg-brand transition";
    const activeStyle = "text-fg-brand font-semibold underline";

    return (
        <header className="fixed w-full z-50 top-0 start-0 text-white">

            {/* Desktop Navbar */}
            <nav className="hidden md:flex bg-slate-900 shadow-lg">
                <div className="flex items-center mx-auto max-w-7xl px-14 py-2 w-full">

                    {/* Logo + Search */}
                    <div className="flex items-center gap-6 flex-1">
                        <Link to="/" className="flex items-center gap-2 text-xl font-semibold shrink-0">
                            <img src={Logo} alt="Logo" className="w-36 h-12" />
                        </Link>

                        <input
                            type="text"
                            placeholder="Cari..."
                            className="w-full max-w-72 rounded-full px-6 py-1 bg-slate-800
              focus:outline-none focus:ring-2 focus:ring-fg-brand"
                        />
                    </div>

                    {/* Login / Avatar */}
                    <div className="flex items-center gap-4 ml-6">
                        {isLoggedIn ? (
                            <Link to="/profile">
                                <img
                                    src={userAvatar}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border border-slate-600 cursor-pointer"
                                />
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-lg bg-fg-brand text-white font-medium hover:opacity-90"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Desktop Bottom Navigation */}
            <nav className="bg-slate-800 hidden md:block shadow-md shadow-slate-900">
                <div className="max-w-7xl px-16 py-2 mx-auto">
                    <ul className="flex space-x-8 text-sm font-medium">
                        {menuItems.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden bg-slate-900 shadow-md">
                <div className="flex justify-between items-center px-6 py-3">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="w-32" />
                    </Link>

                    <button onClick={() => setOpen((prev) => !prev)}>
                        {open ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {open && (
                    <div className="bg-slate-800 border-t border-slate-700 px-6 py-5 space-y-5">

                        {/* Mobile Search */}
                        <input
                            type="text"
                            placeholder="Cari..."
                            className="w-full rounded-full px-5 py-2 bg-slate-900
              focus:outline-none focus:ring-2 focus:ring-fg-brand"
                        />

                        {/* Mobile Menu */}
                        <ul className="flex flex-col space-y-4 text-base font-medium">
                            {menuItems.map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink to={to} onClick={() => setOpen(false)} className="hover:text-fg-brand">
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <hr className="border-slate-700" />

                        {/* Mobile Login / Account */}
                        {isLoggedIn ? (
                            <Link
                                to="/profile"
                                className="text-fg-brand font-medium block"
                                onClick={() => setOpen(false)}
                            >
                                Informasi Akun
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="text-fg-brand font-medium block"
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}
