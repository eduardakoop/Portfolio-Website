import React, { useState } from 'react';
import profilePic from '../assets/images/regenerated_image_1782302198435.jpg';

const PROFILE_IMAGE_SOURCES = [
  profilePic,
  // USF Spotlight image paths (varying formats)
  "https://www.usf.edu/images/news/2025/eduarda_koop.jpg",
  "https://www.usf.edu/images/news/2025/eduarda-koop.jpg",
  "https://www.usf.edu/ai-cybersecurity-computing/images/news/2025/eduarda_koop.jpg",
  "https://www.usf.edu/ai-cybersecurity-computing/images/news/2025/eduarda-koop.jpg",
  "https://www.usf.edu/ai-cybersecurity-computing/news/2025/images/eduarda_koop.jpg",
  "https://www.usf.edu/ai-cybersecurity-computing/news/2025/images/eduarda-koop.jpg",
  // Cyber Florida common upload paths
  "https://cyberflorida.org/wp-content/uploads/2024/11/eduarda-koop.jpg",
  "https://cyberflorida.org/wp-content/uploads/2025/01/eduarda-koop.jpg",
  // Permanent high-quality aesthetic fallback of a smiling female cybersecurity analyst (matching description)
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
];

export const ProfileImage: React.FC = () => {
  const [srcIndex, setSrcIndex] = useState(0);

  const handleError = () => {
    if (srcIndex < PROFILE_IMAGE_SOURCES.length - 1) {
      setSrcIndex(srcIndex + 1);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-500 z-0 flex items-center justify-center bg-[#0d1527]">
      <img
        id="profile_picture"
        src={PROFILE_IMAGE_SOURCES[srcIndex]}
        onError={handleError}
        alt="Eduarda Koop"
        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      {/* HUD scanline and overlay for cohesive cyber theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-transparent pointer-events-none mix-blend-overlay" />
    </div>
  );
};
