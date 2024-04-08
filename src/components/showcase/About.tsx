import React, { useEffect } from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {



    return (
        // add on resize listener
        <div className="site-page-content">
            <h1>Projects</h1>

            <br />

            <h2>About</h2>
            <p>My name is Henry Wang and I'm a high schooler in the Bay Area. I love computer science, math, nature, and wrestling. </p>
            
            <br />

            <h2>Projects</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

                {/* SearchMe Project */}
                <p>
                    <strong>SearchMe</strong> - Personal OSINT tool for e-presence monitoring (private)
                </p>

                {/* GSearch Project */}
                <p>
                    <strong>GSearch</strong> - Discord self-bot with OSINT and other capabilities (private)
                </p>

                {/* henry.directory Project */}
                <p>
                    <strong>henry.directory</strong> - Archive of publicly leaked data (retired)
                </p>

                {/* DShop Helper Project */}
                <p>
                    <a href="https://github.com/braindead-dev/discord-shop-helper" rel="noreferrer" target="_blank"><strong>DShop Helper</strong></a> - Discord bot that assists digital product store owners and fights spam
                </p>

                {/* Cashbot Project */}
                <p>
                    <a href="https://github.com/braindead-dev/CashBot" rel="noreferrer" target="_blank"><strong>Cashbot</strong></a> - Discord bot that handles Cash App as a payment gateway
                </p>

                {/* FilePump Project */}
                <p>
                    <a href="https://github.com/braindead-dev/FilePump" rel="noreferrer" target="_blank"><strong>FilePump</strong></a> - Lightweight .exe file size bloater for whitehat testing purposes
                </p>

                {/* Personal Site Project */}
                <p>
                    <a href="https://github.com/braindead-dev/henrywa.ng" rel="noreferrer" target="_blank"><strong>Personal Site</strong></a> - Simple website displaying some info about myself
                </p>

                {/* Google Calendar Project */}
                <p>
                    <a href="https://github.com/braindead-dev/google-calendar-app" rel="noreferrer" target="_blank"><strong>Google Calendar</strong></a> - Google Calendar app for Windows, made with Electron
                </p>

                {/* Idus AI Project */}
                <p>
                    <strong>Idus AI</strong> - Cyberspace management utility for regular people (in progress)
                </p>
            </div>

            <p><strong>Email</strong> <span style={{ opacity: '.5' }}>–</span> contact@henrywa[.]ng<br /></p>
            <br />
            <p></p><strong>Telegram</strong> <span style={{ opacity: '.5' }}>–</span> <a href="https://t.me/henry99x">@henry99x</a></p>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
