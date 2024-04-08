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
      width={600}
      height={200}
      windowTitle="Music Player"
      windowBarIcon="smallmusicicon"
      windowBarColor="#240C00"
      closeWindow={onClose}
      onInteract={onInteract}
      minimizeWindow={onMinimize}
    >
      <MusicPlayer
        src={musicSrc}
        title="Pure Love - Hate"
        subtitle="LUCKI"
        currentSong={''}
        setCurrentSong={() => {}}
      />
    </Window>
  );
};

export default MusicPlayerApp;
