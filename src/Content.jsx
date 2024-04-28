import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { AnimesIndex } from "./AnimesIndex";
import { AnimesShow } from "./AnimesShow";
import { MangasIndex } from "./MangasIndex";
import { MangasShow } from "./MangasShow";

export function Content() {
  const [animes, setAnimes] = useState([]);
  const [isAnimesShowVisible, setIsAnimesShowVisible] = useState(false);
  const [currentAnime, setCurrentAnime] = useState({});
  const [mangas, setMangas] = useState([]);
  const [isMangasShowVisible, setIsMangasShowVisible] = useState(false);
  const [currentManga, setCurrentManga] = useState({});

  const handleIndexAnimes = () => {
    console.log("handleIndexAnimes");
    axios.get("http://localhost:3000/animes.json").then((response) => {
      console.log(response.data);
      setAnimes(response.data);
    });
  };
  const handleShowAnime = (anime) => {
    console.log("handleShowAnime", anime);
    setIsAnimesShowVisible(true);
    setCurrentAnime(anime);
  };

  const handleAnimeClose = () => {
    console.log("handleClose");
    setIsAnimesShowVisible(false);
  };

  const handleIndexMangas = () => {
    console.log("handleIndexMangas");
    axios.get("http://localhost:3000/mangas.json").then((response) => {
      console.log(response.data);
      setMangas(response.data);
    });
  };
  const handleShowManga = (manga) => {
    console.log("handleShowManga", manga);
    setIsMangasShowVisible(true);
    setCurrentManga(manga);
  };

  const handleMangaClose = () => {
    console.log("handleClose");
    setIsMangasShowVisible(false);
  };

  useEffect(handleIndexAnimes, []);
  useEffect(handleIndexMangas, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<LoutoutLink />} />
      </Routes>
      <AnimesIndex animes={animes} onShowAnime={handleShowAnime} />
      <MangasIndex mangas={mangas} onShowManga={handleShowManga} />
      <Modal show={isAnimesShowVisible} onClose={handleAnimeClose}>
        <AnimesShow anime={currentAnime} />
      </Modal>
      <Modal show={isMangasShowVisible} onClose={handleMangaClose}>
        <MangasShow manga={currentManga} />
      </Modal>
    </div>
  );
}
