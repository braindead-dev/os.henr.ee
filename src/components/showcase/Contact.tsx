import React, { useEffect, useState, useCallback } from 'react';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import tgIcon from '../../assets/pictures/contact-tg.png';

export interface ContactProps {}

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/braindead-dev'}
                    />
                    <SocialBox
                        icon={tgIcon}
                        link={'https://t.me/henry99x'}
                    />
                    <SocialBox
                        icon={twitterIcon}
                        link={'https://twitter.com/henry0284928382'}
                    />
                </div>
            </div>

            <br />

            <p>Thanks for visiting my site. My name is Henry Wang and I'm a high schooler in the Bay Area. I love computer science, math, nature, and wrestling. </p>
            
            <br />
            
            <h2>Socials</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>Insta</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <a href="https://instagram.com/b0i" rel="noreferrer" target="_blank"><p>@b0i</p></a>
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>Twitter</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <a href="https://twitter.com/henry0284928382" rel="noreferrer" target="_blank"><p>@henry0284928382</p></a>
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>Github</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <a href="https://github.com/braindead-dev" rel="noreferrer" target="_blank"><p>@braindead-dev</p></a>
                    </td>
                </tr>
            </tbody>
            </table>

            <br />

            <h2>Contact</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>Email</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <a href="mailto:contact@henrywa.ng"><p>contact@henrywa.ng</p></a>
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <p><b>Telegram</b></p>
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        <a href="https://t.me/henry99x" rel="noreferrer" target="_blank"><p>@henry99x</p></a>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        flexDirection: 'column',
        marginTop: 32,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    buttons: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',

        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 32,
    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    social: {
        width: 4,
        height: 4,
        // borderRadius: 1000,

        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;
