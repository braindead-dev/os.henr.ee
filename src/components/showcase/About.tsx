import React from 'react';
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
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <br />
            <div className="text-block">
                <h2>henr.ee</h2>
                <br />
                <p>
                    henr.ee is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2024, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March. I've been developing it alongside
                    my last semester at school and if you are reading this, it's
                    pretty much done!
                </p>
            </div>
            <div className="text-block">
                <h2>Guntattchment Saga The Sequel</h2>
                <br />
                <p>
                    Guntattchment Saga or GSTS is a game I made with my good
                    friend Scott Bass back in 2019. The game is a wave based top
                    down shooter where you progress by building the most
                    outrageous of weapons through attaching as many attachments
                    on your weapon as you can. The game ceased development in
                    2019 because we unfortunately both had packed school
                    schedules and were unable to find the time to work on it.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Guntattchment Saga Gameplay
                                demo, featuring the main character along with a
                                few of our grunt and dasher enemies.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Guntattchment Saga was a really fun project to work on and
                    had a multitude of challenges. An interesting challenge that
                    you may not even notice was the rotation of objects such as
                    the players weapon. Rotating pixel art is a very difficult
                    thing to do because in the world of pixels you are dealing
                    with such a little amount of information. Even a single
                    misplaced pixel can cause a sprite to read in a totally
                    different and unintended way. To deal with this we developed
                    an algorithm to prioritize outlines, while rotating the
                    insides with a simple Nearest Neighbor algorithm. Doing so
                    resulted in a relatively readable sprite when rotating
                    sprites. It was a surprisingly difficult challenge as it
                    intersected both art and programming, but was fun to work on
                    overall.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/scottbass47/gsts"
                        >
                            <p>
                                <b>[GitHub]</b> - Guntattchment Saga The Sequel
                                Unity Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/gsts_assets"
                        >
                            <p>
                                <b>[GitHub]</b> - Guntattchment Saga The Sequel
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the game currently is not in a releasable
                    state and so there is no demo available online. If this ever
                    changes, however, a link to the game will be added here.
                </p>
            </div>
            <div className="text-block">
                <h2>Skip the Scroll</h2>
                <br />
                <p>
                    While working at Hover, I spent a lot of time on GitHub
                    issue pages looking for answers and solutions to problems I
                    had run into. I would always find myself sifting though the
                    comments trying to find the right answer, which usually had
                    the most upvotes and positive reactions. With that
                    information, I decided to create a very simple chrome
                    extension that would sift through all the comments on the
                    page, sort them by positive reactions, and then allow you to
                    traverse them from most positive reactions to least positive
                    reactions.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skip the Scroll in action, finding
                            the highest rated comments and scrolling right to
                            them
                        </sub>
                    </p>
                </div>
                <p>
                    The extension is open source and currently released on the
                    Chrome web store. Skip the Scroll is obviously not a project
                    with massive scope, but was fun to make and dive into the
                    world of browser extensions. I wanted to showcase since it's
                    a developer tool and I wanna give it some visibility for
                    those who might find it useful.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/skip-the-scroll"
                        >
                            <p>
                                <b>[GitHub]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/skip-the-scroll/mfehannpjmgfagldoilpngeoecdfgmnd"
                        >
                            <p>
                                <b>[Chrome Web Store]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    If you are a developer and have also found yourself
                    scrolling through github comment after github comment saying
                    "i also have this problem...", then I highly recommend you
                    check out Skip the Scroll to save you some of your precious
                    time. If you like it, feel free to star it on GitHub and
                    rate it on the Chrome web store.
                </p>
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
