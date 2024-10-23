import React, { useState } from 'react';
import Window from '../os/Window';
import MusicPlayer from '../general/MusicPlayer';

// @ts-ignore
import pureLove from '../../assets/audio/pure_love_hate.mp3';

export interface MusicPlayerAppProps extends WindowAppProps {}

const MusicPlayerApp: React.FC<MusicPlayerAppProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    const songTitle = 'Pure Love - Hate';
    const artist = 'LUCKI';

    return (
        <Window
            top={50}
            left={50}
            width={700}
            height={175}
            windowTitle={`Music Player - ${songTitle} by ${artist}`}
            windowBarIcon="windowMusicIcon"
            rainbow={true}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            resizable={false} // Disable resizing
            showMaximizeButton={false} // Hide maximize button
        >
            <MusicPlayer
                src={pureLove}
                title={songTitle}
                subtitle={artist}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
        </Window>
    );
};

export default MusicPlayerApp;
