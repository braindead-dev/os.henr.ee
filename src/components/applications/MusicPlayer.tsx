import React from 'react';
import Window from '../os/Window';
import MusicPlayer from '../general/MusicPlayer'; // Adjust the path as needed

export interface MusicPlayerAppProps extends WindowAppProps {}

const musicSrc = '.../assets/audio/pure_love_hate.mp3';

const MusicPlayerApp: React.FC<MusicPlayerAppProps> = ({ onClose, onInteract, onMinimize }) => {
  return (
    <Window
      top={50}
      left={50}
      width={400}
      height={300}
      windowTitle="Music Player"
      windowBarIcon="windowGameIcon" // Ensure you have this icon in your assets
      closeWindow={onClose}
      onInteract={onInteract}
      minimizeWindow={onMinimize}
    >
      <MusicPlayer
        src={musicSrc}
        title="Pure Love - Hate"
        subtitle="LUCKI"
        currentSong={''}
        setCurrentSong={() => {}} // Consider implementing this functionality if your app needs to manage multiple songs
      />
    </Window>
  );
};

export default MusicPlayerApp;