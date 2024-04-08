import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {

    useEffect(() => {
        // Custom highlight script adapted for React
        const highlightSection = () => {
            const contactSection = document.getElementById('contactSection');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                contactSection.classList.add('highlight');
                setTimeout(() => {
                    contactSection.classList.remove('highlight');
                }, 1500);
            }
        };

        const contactBtn = document.getElementById('contactBtn');
        if (contactBtn) {
            contactBtn.addEventListener('click', highlightSection);
        }

        return () => {
            // Cleanup listener
            if (contactBtn) {
                contactBtn.removeEventListener('click', highlightSection);
            }
        };
    }, []);

    return (
        // add on resize listener
        <div className="site-page-content">
            <h1>Projects</h1>

            <header>
                <nav>
                    <a href="https://henrywa.ng" rel="noreferrer" target="_blank">Home</a> /
                    <a href="#" id="contactBtn" onClick={(e) => e.preventDefault()}>Contact</a> 
                </nav>
            </header>
            
            <h2>About</h2>
            <p>My name is Henry Wang and I'm a high schooler in the Bay Area. I love computer science, math, nature, and wrestling. </p>
            
            <h2>Projects</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                {/* SearchMe Project */}
                <div>
                    <strong>SearchMe</strong> - Personal OSINT tool for e-presence monitoring (private)
                </div>

                {/* GSearch Project */}
                <div>
                    <strong>GSearch</strong> - Discord self-bot with OSINT and other capabilities (private)
                </div>

                {/* henry.directory Project */}
                <div>
                    <strong>henry.directory</strong> - Archive of publicly leaked data (retired)
                </div>

                {/* DShop Helper Project */}
                <div>
                    <a href="https://github.com/braindead-dev/discord-shop-helper" rel="noreferrer" target="_blank"><strong>DShop Helper</strong></a> - Discord bot that assists digital product store owners and fights spam
                </div>

                {/* Cashbot Project */}
                <div>
                    <a href="https://github.com/braindead-dev/CashBot" rel="noreferrer" target="_blank"><strong>Cashbot</strong></a> - Discord bot that handles Cash App as a payment gateway
                </div>

                {/* FilePump Project */}
                <div>
                    <a href="https://github.com/braindead-dev/FilePump" rel="noreferrer" target="_blank"><strong>FilePump</strong></a> - Lightweight .exe file size bloater for whitehat testing purposes
                </div>

                {/* Personal Site Project */}
                <div>
                    <a href="https://github.com/braindead-dev/henrywa.ng" rel="noreferrer" target="_blank"><strong>Personal Site</strong></a> - Simple website displaying some info about myself
                </div>

                {/* Google Calendar Project */}
                <div>
                    <a href="https://github.com/braindead-dev/google-calendar-app" rel="noreferrer" target="_blank"><strong>Google Calendar</strong></a> - Google Calendar app for Windows, made with Electron
                </div>

                {/* Idus AI Project */}
                <div>
                    <strong>Idus AI</strong> - Cyberspace management utility for regular people (in progress)
                </div>
            </div>


            <div id="contactSection" style={{ marginTop: '32px' }}>
                <strong>Email</strong> <span style={{ opacity: '.5' }}>–</span> contact@henrywa[.]ng<br />
                <strong>Telegram</strong> <span style={{ opacity: '.5' }}>–</span> <a href="https://t.me/henry99x">@henry99x</a>
            </div>
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
