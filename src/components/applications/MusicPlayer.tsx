import React, { useState } from 'react';
import Window from '../os/Window';
import MusicPlayer from '../general/MusicPlayer'; // Adjust the path as needed
import pureLove from '../../assets/audio/pure_love_hate.mp3';


export interface MusicPlayerAppProps extends WindowAppProps {}


const MusicPlayerApp: React.FC<MusicPlayerAppProps> = (props) => {
  
  const [currentSong, setCurrentSong] = useState<string>('');

  return (
    <Window
      top={50}
      left={50}
      width={700}
      height={200}
      windowTitle="Music Player"
      windowBarIcon="windowGameIcon" // Ensure you have this icon in your assets
      windowBarColor="#240C00"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
    >
      <MusicPlayer
        src={pureLove}
        title="Pure Love - Hate"
        subtitle="LUCKI"
        currentSong={currentSong}
        setCurrentSong={setCurrentSong} 
      />
    </Window>
  );
};




