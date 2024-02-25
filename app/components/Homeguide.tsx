"use client";

import React, { useState } from "react";
import YouTubeModal from "./YouTubeModal"; // Adjust the path based on your project structure

const Homeguide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const openModal = (videoId: any) => {
    setCurrentVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoId(null);
  };

  return (
    <div>
      <p>
        <b>Accessing the Condo: </b>
        Use the side door to the left (as you are facing the building). The
        first door is the stairs, but the elevator is right there:
      </p>

      <div className="iframe-container mb-4">
        <div
          className="relative cursor-pointer"
          onClick={() => openModal("ECX7Ro45dYs")}
        >
          <img
            className="w-full h-48 object-cover rounded-md"
            src={`https://img.youtube.com/vi/ECX7Ro45dYs/mqdefault.jpg`}
            alt="Video Preview"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-12 h-12 text-white transition-opacity duration-300 opacity-70 hover:opacity-90"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 4l10 6-10 6V4z" />
            </svg>
          </div>
        </div>
      </div>

      <p>
        <b>Note:</b> All codes will be provided at check in. There is a code for
        entering the building, pool area, and unit 252. If you enter through the
        front door, please note that the people at the front desk do not work
        for the condo and will not be able to assist you. Please use the contact
        information provided at check in with any questions! In the Master
        Bedroom, there is a bonus bed! If you are in need of an extra spot for
        someone to sleep, the chair folds out.
      </p>
      <div className="iframe-container mb-4">
        <div
          className="relative cursor-pointer"
          onClick={() => openModal("7ktrvxy2I7E")}
        >
          <img
            className="w-full h-48 object-cover rounded-md"
            src={`https://img.youtube.com/vi/7ktrvxy2I7E/mqdefault.jpg`}
            alt="Video Preview"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-12 h-12 text-white transition-opacity duration-300 opacity-70 hover:opacity-90"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 4l10 6-10 6V4z" />
            </svg>
          </div>
        </div>
      </div>

      {modalOpen && (
        <YouTubeModal videoId={currentVideoId} onClose={closeModal} />
      )}
    </div>
  );
};

export default Homeguide;
