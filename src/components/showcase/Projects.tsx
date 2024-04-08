import React, { useEffect } from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {



    return (
        // add on resize listener
        <div className="site-page-content">
            <h1>Projects</h1>

            <br />

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                {/* SearchMe Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>SearchMe</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Personal OSINT tool for e-presence monitoring (private)</p>
                    </td>
                </tr>

                {/* GSearch Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>GSearch</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Discord self-bot with OSINT and other capabilities (private)</p>
                    </td>
                </tr>

                {/* henry.directory Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>henry.directory</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Archive of publicly leaked data (retired)</p>
                    </td>
                </tr>

                {/* DShop Helper Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b><a href="https://github.com/braindead-dev/discord-shop-helper" rel="noreferrer" target="_blank"><b>DShop Helper</b></a></b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Discord bot that assists digital product store owners and fights spam</p>
                    </td>
                </tr>

                {/* Cashbot Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><a href="https://github.com/braindead-dev/CashBot" rel="noreferrer" target="_blank"><b>Cashbot</b></a></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Discord bot that handles Cash App as a payment gateway</p>
                    </td>
                </tr>

                {/* FilePump Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    <p><a href="https://github.com/braindead-dev/FilePump" rel="noreferrer" target="_blank"><b>FilePump</b></a></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Lightweight .exe file size bloater for whitehat testing purposes</p>
                    </td>
                </tr>

                {/* Personal Site Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    <p><a href="https://github.com/braindead-dev/henrywa.ng" rel="noreferrer" target="_blank"><b>Personal Site</b></a></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Simple website displaying some info about myself</p>
                    </td>
                </tr>

                {/* Google Calendar Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    <p><a href="https://github.com/braindead-dev/google-calendar-app" rel="noreferrer" target="_blank"><b>Google Calendar</b></a></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Google Calendar app for Windows, made with Electron</p>
                    </td>
                </tr>

                {/* Idus AI Project */}
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    <p><b>Idus AI</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p>Cyberspace management utility (in progress)</p>
                    </td>
                </tr>
            </tbody>
            </table>


            <br />
            <p><b>Email</b> <span style={{ opacity: '.5' }}>–</span> contact@henrywa.ng<br /></p>
            <p><b>Telegram</b> <span style={{ opacity: '.5' }}>–</span> <a href="https://t.me/henry99x">@henry99x</a></p>
        
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

export default Projects;
