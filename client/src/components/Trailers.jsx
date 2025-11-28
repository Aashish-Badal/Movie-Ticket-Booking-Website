import React, { useState } from "react";

const Trailers = () => {
  const videos = [
    { id: 1, vid: "sPemKns0mA4", title: "Trailer 1" },
    { id: 2, vid: "dQw4w9WgXcQ", title: "Trailer 2" },
    { id: 3, vid: "9bZkp7q19f0", title: "Trailer 3" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0].vid);

  return (
    <div className="bg-black px-40 py-20 flex flex-col items-center justify-center">
      <p className="self-start text-2xl text-white">Trailers</p>

      {/* Main Video */}
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
        title="Main trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl"
      ></iframe>

      {/* Thumbnails */}
      <div className="flex gap-10 mt-10">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video.vid)}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={`https://img.youtube.com/vi/${video.vid}/hqdefault.jpg`}
              alt={video.title}
              className="w-[200px] h-[130px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
