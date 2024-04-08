import React from 'react';
import Window from '../os/Window';
import MusicPlayer from './MusicPlayer'; // Adjust the path as needed

// Dummy music source for demonstration
const musicSrc = '.../assets/audio/pure_love_hate.mp3';

const MusicPlayerApp = ({ onClose, onInteract, onMinimize }) => {
  return (
    <Window
      top={50}
      left={50}
      width={400}
      height={300}
      windowTitle="Music Player"
      windowBarIcon="musicPlayerIcon" // Add this icon to your assets
      closeWindow={onClose}
      onInteract={onInteract}
      minimizeWindow={onMinimize}
    >
      <MusicPlayer
        src={musicSrc}
        title="Pure Love - Hate"
        subtitle="LUCKI"
        currentSong={''}
        setCurrentSong={() => {}} // Implement functionality if needed
      />
    </Window>
  );
};

export default MusicPlayerApp;
