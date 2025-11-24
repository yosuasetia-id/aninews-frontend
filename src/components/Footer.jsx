export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-8 mt-10">
            {/* COPYRIGHT */}
            <div className="text-center text-xs text-slate-500">
                © {new Date().getFullYear()} AniNews. All rights reserved.
            </div>
        </footer>
    );
}
