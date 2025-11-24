import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AnimeNews from "./pages/AnimeNews";
import MangaNews from "./pages/MangaNews";
import Komunitas from "./pages/Komunitas";

export default function App() {
  return (
    <div className="bg-slate-700 h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="animenews" element={<AnimeNews />} />
            <Route path="manganews" element={<MangaNews />} />
            <Route path="komunitas" element={<Komunitas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
